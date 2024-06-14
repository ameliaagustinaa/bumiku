import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    let response;
    // if (req.role === "admin") {
    response = await Product.findAll({
      attributes: ["uuid", "name", "price", "imageUrl", "payment_status"],
      include: [
        {
          model: User,
          attributes: ["name", "email"],
        },
      ],
    });
    console.log(response);
    // } else {
    //   response = await Product.findAll({
    //     attributes: ["uuid", "name", "price", "payment_status"],
    //     where: {
    //       userId: req.userId,
    //     },
    //     include: [
    //       {
    //         model: User,
    //         attributes: ["name", "email"],
    //       },
    //     ],
    //   });
    // }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Product.findOne({
        attributes: ["uuid", "name", "price", "payment_status"],
        where: {
          id: product.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Product.findOne({
        attributes: ["uuid", "name", "price", "payment_status"],
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, imageUrl, payment_status } = req.body;
  try {
    await Product.create({
      name,
      price,
      imageUrl,
      userId: req.userId,
      payment_status,
    });
    res.status(201).json({ msg: "Product Created Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const saveProduct = (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
  console.log(req.body);
  const name = req.body.name;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({ name: name, image: fileName, url: url });
      res.status(201).json({ msg: "Product Created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, price, payment_status } = req.body;
    if (req.role === "admin") {
      await Product.update(
        { name, price, payment_status },
        {
          where: {
            id: product.id,
          },
        }
      );
    } else {
      if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses terlarang" });
      await Product.update(
        { name, price, payment_status },
        {
          where: {
            [Op.and]: [{ id: product.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    if (req.role === "admin") {
      await Product.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
      if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses terlarang" });
      await Product.destroy({
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

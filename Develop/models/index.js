// Importing the models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// What category does this product belong in
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Category has MANY items
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products can belong to many different tags
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'product_id',
});

// Tags can belong to MANY products
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_tags',
  foreignKey: 'tag_id',
});

// Exports items below
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

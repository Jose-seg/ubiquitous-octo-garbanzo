const BlogPost = require('./blogPost');
const Category = require('./Category')

// Associations Here:
Category.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});

BlogPost.hasMany(Category, {
    foreignKey: 'blogpost_id',
});

module.exports = {
    BlogPost,
    Category,
};

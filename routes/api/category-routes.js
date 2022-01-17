const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.
      findAll({
        include: [{ model: Product }],
      });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.
      findOne({
        include: [Product],
        where: {
          id: req.params.id
        }
      });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
    // create a new category
    const requestData = await Category.
      create(req.body,);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
      const requestData = await Category.update(req, body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(req.body);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(categoryData);
  });

module.exports = router;

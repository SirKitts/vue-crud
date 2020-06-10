const userBuilder = require('../controllers/userController');

module.exports = app => {
  app
    .route('/users')
    .get(userBuilder.list_users)
    .post(userBuilder.create_user);

  app
    .route('/users/:userId')
    .get(userBuilder.read_user)
    .put(userBuilder.update_user)
    .delete(userBuilder.delete_user);
};
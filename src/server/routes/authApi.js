import express from 'express';
import axios from 'axios';

const authApi = (app) => {
  const router = express.Router();
  app.use('/auth', router);

  router.post('/sign-up', async (req, res, next) => {
    const { body: user } = req;
    try {
      await axios({
        url: `${process.env.API_URL}/api/auth/sign-up`,
        method: 'post',
        data: user,
      });
      res.status(200).json({ message: 'user created' });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = authApi;

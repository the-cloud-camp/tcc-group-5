const prisma = require('../models/prisma');
const { checkUserIdSchema } = require('../validators/user-validator');

exports.getUserById = async (req, res, next) => {
  try {
    const { error } = checkUserIdSchema.validate(req.params);
    if (error) {
      return next(error);
    }

    const userId = +req.params.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      delete user.password;
    }

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

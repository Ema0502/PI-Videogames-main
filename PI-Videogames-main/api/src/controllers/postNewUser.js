const { User } = require("../db");

const postNewUser = async (req, res) => {
  const { email, password } = req.body;

  try {

    if (!email || !password) {
      // Verificamos que todos los datos necesarios estén presentes
      return res.status(404).json({ message: "missing data!" });
    }
    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({
      email,
      password,
    });

    return res.status(200).json({ message: 'User created successfully' }, newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  postNewUser
}
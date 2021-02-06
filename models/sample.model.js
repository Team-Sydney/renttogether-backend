module.exports = (sequelize, Sequelize) => {
  const Sample = sequelize.define('Samples', {
    sid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

 
  return Sample;
};


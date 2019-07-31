const User = db.define('user', {
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, unique: true, allowNull: false },
    address: { type: Sequelize.STRING, allowNull: true }
  });
  
  const ServiceProvider = db.define('service_provider', {
    service_type: { type: Sequelize.STRING, allowNull: false },
    price_in_cents: {type: Sequelize.INTEGER, allowNull: true},
    location: { type: Sequelize.STRING, allowNull: false },
    schedule: { type: Sequelize.STRING, allowNull: false },
    contact_email: { type: Sequelize.STRING, allowNull: true },
    contact_sms: { type: Sequelize.STRING, allowNull: true },
    approved: { type: Sequelize.BOOLEAN, allowNull: false, default: false },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    }
  });
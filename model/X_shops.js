// const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const X_shops = (sequelize) => {
  sequelize.define('x_shops', {
    shopid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    guid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shopname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shoptoken: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shopdetails: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    webhook_https: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hoopi_installed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fbpixel_enabled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    appname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Wishlist"
    },
    planstatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    webhook_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "1.0"
    },
    isFirstTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    pid_metafield_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    public_key_metafield_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    affiliateid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    couponcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    public_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    script_tag_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    log_file_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updatedts: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
    }
  }, {
    sequelize,
    tableName: 'X_shops',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shopid" },
        ]
      },
      {
        name: "uc_Shop_App",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shopname", length: 200 },
          { name: "appname", length: 100 },
        ]
      },
      {
        name: "xshops_fbpixel_enabled",
        using: "BTREE",
        fields: [
          { name: "fbpixel_enabled" },
        ]
      },
      {
        name: "xshops_hoopi_installed",
        using: "BTREE",
        fields: [
          { name: "hoopi_installed" },
        ]
      },
      {
        name: "xshops_webhook_https",
        using: "BTREE",
        fields: [
          { name: "webhook_https" },
        ]
      },
    ]
  });
};

module.exports=X_shops;
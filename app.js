const db = require('./model/db.js');
const GetEntry = async() => {
    return db.models.x_shops.findAll({
      where: { guid: 'testingwithguid' }
    });
  }

const upsert = async(model, values, condition) => {
  return model.findOne({where: condition})
              .then((obj)=>{
                if(obj) {
                  return obj.update(values);
                }
                return model.create(values);
              })
}
const UpsertEntry = async(guid, shopname, shoptoken, appname, version, pid_metafield_id, pid, log_file_name, updatets, shopdetails, public_key, script_tag_id, public_key_metafield_id) => {
  return upsert(db.models.x_shops, {guid, shopname, shoptoken, appname, version, pid_metafield_id, pid, log_file_name, updatets, shopdetails, public_key, script_tag_id, public_key_metafield_id}, {pid, appname})
}

const updateTier = async(pid, appname, tier) => {
  return db.models.x_shops.update({tier:tier},{where: {pid: pid, appname:appname}})
}

// Get for guid
GetEntry().then((data)=> console.log(data));

// Upsert 
UpsertEntry('testingwithguid', 'xyz.platform.inc', 'dbvjiwheu28739bdwkjbfskj', 'Watchlist', '1.0', '9000000000000', 'sdjbcijsdkbobfowenf=', './nichuspntests', Date.now(), '{}', '', '', '').then((res)=>{
  console.log(">>>>> Success");
  console.log(res)
})

// Update Tier
updateTier('sdjbcijsdkbobfowenf=', 'Watchlist', 'v3test-01').then((data)=> console.log(data));

// console.log(x);

// public_key cannot be null
// script_tag_id cannot be null
// public_key_metafield_id cannot be null
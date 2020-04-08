const { fetchData } = require("./aws");

const handler = async () => {
  const { SecurityGroups } = fetchData();
  SecurityGroupList = SecurityGroups.map(
    (SecurityGroup) => SecurityGroup.GroupName
  );
  const response = {
    statusCode: 200,
    headers: {
      "x-custom-header": "my custom header value",
    },
    body: JSON.stringify(SecurityGroupList),
  };

  return response;
};

exports.handler = handler;

// userInfo.js

function createUserProfiles(originalNames, modifiedNames) {
  return originalNames.map((originalName, index) => ({
      originalName: originalName,
      modifiedName: modifiedNames[index],
      id: index + 1
  }));
}

// Example usage:
const originalNames = ["marguerita", "DOgbeda", "gbebleou"];
const modifiedNames = ["Marguerita", "Dogbeda", "Gbebleou"];

console.log(createUserProfiles(originalNames, modifiedNames));


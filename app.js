// Portfolio Generator Application Code

// variable declaration
const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });
};

// UI
printProfileData(profileDataArgs);
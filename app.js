const profileDataArr = process.argv.slice(2,
process.argv.length);
console.log(profileDataArr);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }
};
printProfileData(profileDataArr);

 console.log('=============');

 profileDataArr.forEach(profileItem => 
    console.log(profileItem));


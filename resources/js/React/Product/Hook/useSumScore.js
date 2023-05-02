
const UseSumScore = (data) => {

    return ((data.reduce((item, change) => item + Number(change.score), 0)) / (data.length)).toFixed(1)
};

export default UseSumScore;

class Statistics {
    constructor(data) {
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((acc, value) => acc + value, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sortedData = this.data.slice().sort((a, b) => a - b);
        const mid = Math.floor(sortedData.length / 2);

        if (sortedData.length % 2 === 0) {
            return (sortedData[mid - 1] + sortedData[mid]) / 2;
        } else {
            return sortedData[mid];
        }
    }

    mode() {
        const frequencyMap = {};
        this.data.forEach(value => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });

        let maxFrequency = 0;
        let modes = [];

        for (const key in frequencyMap) {
            const frequency = frequencyMap[key];
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
                modes = [parseInt(key)];
            } else if (frequency === maxFrequency) {
                modes.push(parseInt(key));
            }
        }

        return { mode: modes[0], count: maxFrequency };
    }

    var() {
        const meanValue = this.mean();
        const squaredDifferences = this.data.map(value => Math.pow(value - meanValue, 2));
        const sumSquaredDifferences = squaredDifferences.reduce((acc, value) => acc + value, 0);
        return sumSquaredDifferences / this.data.length;
    }

    std() {
        return Math.sqrt(this.var());
    }

    freqDist() {
        const frequencyMap = {};
        this.data.forEach(value => {
            frequencyMap[value] = (frequencyMap[value] || 0) + 1;
        });

        const sortedFreqDist = Object.entries(frequencyMap)
            .map(([value, count]) => [count, parseInt(value)])
            .sort((a, b) => b[0] - a[0] || a[1] - b[1]);

        return sortedFreqDist;
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());

const nucampClasses = [
  { name: 'Html, CSS, JavaScript', durationInWeeks: 4 },
  { name: 'Bootstrap', durationInWeeks: 5 },
  { name: 'React', durationInWeeks: 5 },
  { name: 'React Native', durationInWeeks: 4 },
  { name: 'Server-Side', durationInWeeks: 4 }
];

let totalClassTime = nucampClasses
  .reduce((durationInWeeks, classTime, index, nucampClasses) =>{
    return durationInWeeks += classTime.durationInWeeks;
}, 0);

let classNames = nucampClasses
  .map((className, index, nucampClasses) => `<li>${className.name}</li>`)
  .join('');

const weeksElement = document.getElementById('total-weeks');
weeksElement.innerHTML = totalClassTime;

const courseListElement = document.getElementById('course-list');
courseListElement.innerHTML = classNames;

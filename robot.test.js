const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  const botX = newRobot(true, true, false);
  // act
  let x = station(botX);
  // assert
  expect(x).toEqual(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  const botX = newRobot(true, false, true);
  // act
  let x = station(botX);
  // assert
  expect(x).toEqual(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const botX = newRobot(true, false, false);
  // act
  let x = station(botX)
  // assert
  expect(x).toEqual(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const botX = newRobot(false, false, false);
  // act
  let x = station(botX);
  // assert
  expect(x).toEqual(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const botX = newRobot(false, false, false); 
  // act
  let x = prioritizeTasks(botX);
  // assert
  expect(x).toEqual(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const botX = newRobot(false, false, false);
  botX.todos = [54, 64, 5]

  // act
  let x = prioritizeTasks(botX)
  // assert
  expect(x).toEqual(64);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const botX = newRobot(false, false, false)
  botX.dayOff = 'Weekends';
  // act
  let x = isWorkday(botX, 'Weekends')
  // assert
  expect(x).toEqual(false);
});

test.skip('test_workday_not_day_off_returns_true', () => {
  // arrange

  const botX = newRobot(false, false, false)
  botX.dayOff = 'Weekdays';

  // act
  let x = isWorkday(botX, 'Weekends')
  // assert
  expect(x).toEqual(true);
});

import Character, {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

test('type 1', () => {
  const bowman = new Bowman('Peter', 'Bowman');
  const result = 'Bowman';
  expect(bowman.type).toBe(result);
});

test('type 2', () => {
  const swordsman = new Swordsman('Ivan', 'Swordsman');
  const result = 'Swordsman';
  expect(swordsman.type).toBe(result);
});

test('type 3', () => {
  const magician = new Magician('Mike', 'Magician');
  const result = 'Magician';
  expect(magician.type).toBe(result);
});

test('type 4', () => {
  const daemon = new Daemon('Anna', 'Daemon');
  const result = 'Daemon';
  expect(daemon.type).toBe(result);
});

test('type 5', () => {
  const undead = new Undead('Alice', 'Undead');
  const result = 'Undead';
  expect(undead.type).toBe(result);
});

test('type 6', () => {
  const zombie = new Zombie('Kate', 'Zombie');
  const result = 'Zombie';
  expect(zombie.type).toBe(result);
});

test('name 1', () => {
  const swordsman = new Swordsman('Sam');
  const result = 'Sam';
  expect(swordsman.name).toBe(result);
});

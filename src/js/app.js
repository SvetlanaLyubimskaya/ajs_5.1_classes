class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;

        if (this.name != 'string' && this.name.length > 2 && this.name.length < 10) {
            throw new Error('Ошибка. Некорректное значение');
        }

        if (this.type != 'Bowman' || this.type != 'Swordsman' || this.type != 'Magician' || this.type != 'Daemon' || this.type != 'Undead' || this.type != 'Zombie') {
            throw new Error('Ошибка. Не выбран тип');
        }
    }
}

class Bowerman extends Character{
    constructor(name) {
        super(name, type, 100, 1, 25, 25);
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, type, 100, 1, 40, 10);
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, type, 100, 1, 10, 40);
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, type, 100, 1, 25, 25);
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, type, 100, 1, 40, 10);
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, type, 100, 1, 10, 40);
    }
}
const Hero = class {
    constructor(name) {
        this.name = name ? name : 'The Hero';
        this.health = 50;
        this.armorRating = 0;
        this.equipment = {};
    }

    equip(item) {
        if (this.equipment[[item.category]]) {
            console.log('That item is already equipped!')
            return this.equipment;
        }
        else {
            this.equipment[[item.category]] = item;
            item.armorRating && (this.armorRating += item.armorRating);
        }
        console.log(`Equipped ${item.name}`)
        return this.equipment;
    }

    viewEquipped() {
        let str = `${this.name} is using: `;
        Object.keys(this.equipment).length && Object.keys(this.equipment).forEach((key) => {
            str += `${this.equipment[key].name}, `
        })

        if (str[str.length - 2] === ',') {
            // chop off comma
            str = str.slice(0, str.length - 2);
        }
        else if (str[str.length - 2] === ':') {
            str += 'nothing!'
        }
        console.log(str);
        return str;
    }
}

const EquipmentItem = class {
    constructor(name, category, armorRating = null) {
        this.name = name;
        this.category = category;
        this.armorRating = armorRating;
    }
}

const hero = new Hero();
const sword = new EquipmentItem('Excalibur', 'weapon');
const shield = new EquipmentItem('Red Shield of Highsmuth', 'shield', 1);
const breastplate = new EquipmentItem('Fine Plate Mail', 'breastplate', 3);

hero.equip(sword);
hero.equip(shield);
hero.equip(breastplate);
hero.viewEquipped();

/**
 * Deliverables: 
 * 1. Hero must initiate with a name 
 * 2. Hero is given 50 health
 * 3. Hero is given armor rating
 * 4. Hero can equip the following items: sword, mace, shield, breastplate
 * 5. Only one weapon may be equipped at a time
 * 6. Hero's armor rating changes based on equipment
 * 7. Hero can be hit with a heavy attack (10hp) or a light attack (5hp)
 */
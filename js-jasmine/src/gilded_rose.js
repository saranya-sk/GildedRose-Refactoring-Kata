class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrie(item);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePass(item);
          break;
        case 'Conjured Mana Cake': 
          this.updateConjuredItem(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
        if (item.sellIn < 0) {
          this.handleExpiredItem(item);
        }
      }
    }
    return this.items;
  }
  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  updateBackstagePass(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn < 6) {
      item.quality += item.quality < 50 ? 3 : 0;
    } else if (item.sellIn < 11) {
      item.quality += item.quality < 50 ? 2 : 0;
    } else if (item.quality < 50) {
      item.quality += 1;
    }
  }

  updateNormalItem(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  updateConjuredItem(item) {
    if (item.quality > 0) {
      item.quality -= 2; 
    }
  }

  handleExpiredItem(item) {
    if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality > 0) {
        item.quality -= (item.name.startsWith('Conjured')) ? 2 : 1; 
      }
    } else if (item.name === 'Aged Brie' && item.quality < 50) {
      item.quality += 1; 
    }
  }
}
    // for (var i = 0; i < this.items.length; i++) {
    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }

module.exports = {
  Item,
  Shop
}

import { Component } from '@angular/core';

export class Magic {
  name: string;
  manaCost: string;
  text: string;
  type: string;
  imgURL: string;
}

const MAGIC: Magic[] = [
  {
    name: 'Necropotence',
    manaCost: '{S}{S}{S}',
    text: `Skip your draw step.
          Whenever you discard a card, exile that card from your graveyard.
          Pay 1 life: Exile the top card of your library face down.
          Put that card into your hand at the beginning of your next end step.`,
    type: 'Enchantment',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413640&type=card'

  },
  {
    name: 'Black Lotus',
    manaCost: '{0}',
    text: `Tap, Sacrifice Black Lotus: Add three mana of any one color to your mana pool.`,
    type: 'Artifact',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card'
  },
  {
    name: 'Hypnotic Specter',
    manaCost: '{1}{S}{S}',
    text: `Flying
            Whenever Hypnotic Specter deals damage to an opponent,
             that player discards a card at random 2/2 `,
    type: 'Creature - Specter',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=3&type=card'
  },
  {
    name: 'Sengir Vampire',
    manaCost: '{3}{S}{S}',
    text: `Flying (This creature can't be blocked except by creatures with flying or reach.)
            Whenever a creature dealt damage by Sengir Vampire this turn dies,
             put a +1/+1 counter on Sengir Vampire. 4/4`,
    type: 'Creature - Vampire',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429908&type=card'
  },
  {
    name: 'Icy Manipulator',
    manaCost: '{4}',
    text: `{1}, Tap: Tap target artifact, creature, or land.`,
    type: 'Artifact',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=2408&type=card'
  },
  {
    name: 'Relentless Dead',
    manaCost: '{S}{S}',
    text: `Menace-When Relentless Dead dies, you may pay Black.
           If you do, return it to its owner's hand.
          When Relentless Dead dies, you may pay Variable Colorless.
           If you do, return another target Zombie creature card with converted mana cost
            X from your graveyard to the battlefield.`,
    type: 'Creature - Zombie',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409881&type=card'
  },
  {
    name: 'Nightmare',
    manaCost: '{5}{S}',
    text: `Flying (This creature can't be blocked except by creatures with flying or reach.)
          Nightmare's power and toughness are each equal to the number of Swamps you control
          */* `,
    type: 'Creature - Nightmare Horse',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=429906&type=card'
  },
  {
    name: 'Serra Angel',
    manaCost: '{3}{P}{P}',
    text: `Flying (This creature can't be blocked except by creatures with flying or reach.)
          Vigilance (Attacking doesn't cause this creature to tap.)
          4/4`,
    type: 'Creature - Angel',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=430241&type=card'
  },
  {
    name: 'Ball Lightning',
    manaCost: '{M}{M}{M}',
    text: `Trample (This creature can deal excess combat damage to defending player
           or planeswalker while attacking.)
            Haste (This creature can attack and Tap as soon as it comes under your control.)
          At the beginning of the end step, sacrifice Ball Lightning 6/1`,
    type: 'Creature - Elemental',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=234722&type=card'
  },
  {
    name: 'Recycle',
    manaCost: '{4}{F}{F}',
    text: `Skip your draw step.
          Whenever you play a card, draw a card.
          Your maximum hand size is two.`,
    type: 'Enchantment',
    imgURL: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=397573&type=card'
  }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Magic the Gathering news and card search page!';
  magic = MAGIC;
  selectedCard: Magic;
  onSelect(magic: Magic): void {
  this.selectedCard = magic;
  }
}

import Button from './button.class';

let sampleTrigger = new Button({
	title : 'Touche avec un doigt',
	radius : 400,
})

sampleTrigger.blink = true;

sampleTrigger.coord.y = window.innerHeight+200;
sampleTrigger.coordTitle.y = sampleTrigger.coord.y - 250;

export default sampleTrigger;
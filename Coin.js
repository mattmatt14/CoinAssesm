let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)

        return this.state



        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {


        if (this.state === 0) {
            return "heads"
        }
        else {
            return "Tails"

        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */




    },
    toHTML: function () {
        let image = document.createElement('img');



        if (this.state === 0) {
            image.src = './images/heads.jpg'
        }
        else {
            image.src = './images/tails.jpg'

        }



        /* 3. Set the properties of this image element to show either face-up
                  or face-down, depending on whether this.state is 0 or 1.*/
        return image;

    }
};


coin.flip()
if (coin.state === 1) {
  let container = document.createElement('div');
  let coinImage = coin.toHTML();
  container.append(coinImage);
  document.body.append(container);
}
if (coin.state === 0) {
    let container = document.createElement('div');
    let coinImage = coin.toHTML();
    container.append(coinImage);
    document.body.append(container);
  }
let container = document.createElement('div');

container.append(coin.toHTML());

document.body.append(container);



console.log(coin.flip())
console.log(coin.toString())






function display20Flips() {
    for (let i = 0; i <= 20; i++) {
        coin.flip()
        if (coin.state === 1) {
            let container = document.createElement('div');
            let coinText = coin.toString();
            container.append(coinText);
            document.body.append(container);
        }
        if (coin.state === 0) {
            let container = document.createElement('div');
            let coinText = coin.toString();
            container.append(coinText);
            document.body.append(container);
        }

    }



}
display20Flips()







function display20Image() {
    for (let i = 0; i <= 20; i++) {
        coin.flip()
        if (coin.state === 1) {
            let container = document.createElement('div');
            let coinImage = coin.toHTML();
            container.append(coinImage);
            document.body.append(container);
        }
        if (coin.state === 0) {
            let container = document.createElement('div');
            let coinImage = coin.toHTML();
            container.append(coinImage);
            document.body.append(container);
        }

    }



}
display20Image()













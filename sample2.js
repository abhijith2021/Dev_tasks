const x = (x,y) => x*y;
var y = document.getElementById("demo").innerHTML = x(5,6);
        
            const car = {
                model : ["benz","audi","bmw"],
                year : [1998,1999,2000],
                colour : ["red","blue","green"]
            };
            let {model,year,colour} = car;
            document.getElementById("demo1").innerHTML = "Hi user your " + model[1] + " is " + year[2] +  " made, of " + colour[0] + " colour";
            
            const car_new = [...model,...year,...colour];
            document.getElementById("demo2").innerHTML = car_new;

            const number = [1,2,3,4,5];
            let maxValue = Math.max(...number);
            document.getElementById("demo3").innerHTML = maxValue;

            const fruits = ["apple","orange","watermwlon"];
            const laptops = ["asus","samsung","apple"];
            let text = "";
            let text1 = " ";
            for(let x of fruits)
            {
                text += x + ", " + " <br>";
            }

            for(let y of laptops)
            {
                for(let u of y)
                {

                
                text1 += u + "<br>";
                }
            }
            console.log("")
            document.getElementById("demo5").innerHTML = text;
            document.getElementById("demo4").innerHTML = text1;

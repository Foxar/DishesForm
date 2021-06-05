const axios = require('axios').default;

export function handleFormRequest(e){
    e.preventDefault();
    console.log(this.state);
    let data ={
        name: this.state.name,
        preparation_time: this.state.time,
        type: this.state.selectedType
    }
    if(this.state.selectedType == "pizza"){
        data["no_of_slices"] = this.state.pizzaSlices;
        data["diameter"] = this.state.diameter;
    } else if(this.state.selectedType == "soup"){
        data["spiciness_scale"] = this.state.spicyScale;
    } else if(this.state.selectedType == "sandwich"){
        data["slices_of_bread"] = this.state.sandwichSlices;
    }
    axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes',data).
    then((response)=>{
        console.log(response);
    }).
    catch((error)=>{
        console.log(error);
    });
}
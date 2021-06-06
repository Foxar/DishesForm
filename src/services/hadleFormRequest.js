const axios = require('axios').default;

export function handleFormRequest(e){
    e.preventDefault();
    let data ={
        name: this.state.name,
        preparation_time: this.state.time,
        type: this.state.selectedType
    }
    if(this.state.selectedType == "pizza"){
        data["no_of_slices"] = parseInt(this.state.pizzaSlices,10);
        data["diameter"] = parseInt(this.state.diameter,10);
    } else if(this.state.selectedType == "soup"){
        data["spiciness_scale"] = parseInt(this.state.spicyScale,10);
    } else if(this.state.selectedType == "sandwich"){
        data["slices_of_bread"] = parseInt(this.state.slices_of_bread,10);
    }
    axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes',data).
    then((data)=>{
        this.setSuccess()
    }).
    catch((error)=>{
        if(error.response){
            let errormsg=error.response.data[Object.keys(error.response.data)[0]];
            this.setError(errormsg,Object.keys(error.response.data)[0]);
        }
    });
}
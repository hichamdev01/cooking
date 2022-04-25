export interface recipe{
    name : string;
    id : string;
    description : string;
    tag :string[] ;
    image : string;
    ingredient : string[];
    step : string[];
    recipe : recipe[]
    notes : string;

}
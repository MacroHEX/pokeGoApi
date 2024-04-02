export namespace main {
	
	export class  {
	    slot: number;
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    type: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.slot = source["slot"];
	        this.type = this.convertValues(source["type"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    base_stat: number;
	    effort: number;
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    stat: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.base_stat = source["base_stat"];
	        this.effort = source["effort"];
	        this.stat = this.convertValues(source["stat"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    level_learned_at: number;
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    move_learn_method: any;
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    version_group: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.level_learned_at = source["level_learned_at"];
	        this.move_learn_method = this.convertValues(source["move_learn_method"], Object);
	        this.version_group = this.convertValues(source["version_group"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    move: any;
	    version_group_details: [];
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.move = this.convertValues(source["move"], Object);
	        this.version_group_details = this.convertValues(source["version_group_details"], );
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    rarity: number;
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    version: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.rarity = source["rarity"];
	        this.version = this.convertValues(source["version"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    item: any;
	    version_details: [];
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.item = this.convertValues(source["item"], Object);
	        this.version_details = this.convertValues(source["version_details"], );
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    game_index: number;
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    version: any;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.game_index = source["game_index"];
	        this.version = this.convertValues(source["version"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class  {
	    name: string;
	    url: string;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.url = source["url"];
	    }
	}
	export class  {
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    ability: any;
	    is_hidden: boolean;
	    slot: number;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ability = this.convertValues(source["ability"], Object);
	        this.is_hidden = source["is_hidden"];
	        this.slot = source["slot"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Pokemon {
	    abilities: [];
	    base_experience: number;
	    // Go type: struct { Latest string "json:\"latest\""; Legacy string "json:\"legacy\"" }
	    cries: any;
	    forms: [];
	    game_indices: [];
	    height: number;
	    held_items: [];
	    id: number;
	    is_default: boolean;
	    location_area_encounters: string;
	    moves: [];
	    name: string;
	    order: number;
	    past_abilities: any[];
	    past_types: any[];
	    // Go type: struct { Name string "json:\"name\""; Url string "json:\"url\"" }
	    species: any;
	    // Go type: struct { BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\""; Other struct { DreamWorld struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\"" } "json:\"dream_world\""; Home struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"home\""; OfficialArtwork struct { FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\"" } "json:\"official-artwork\""; Showdown struct { BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"showdown\"" } "json:\"other\""; Versions struct { GenerationI struct { RedBlue struct { BackDefault string "json:\"back_default\""; BackGray string "json:\"back_gray\""; BackTransparent string "json:\"back_transparent\""; FrontDefault string "json:\"front_default\""; FrontGray string "json:\"front_gray\""; FrontTransparent string "json:\"front_transparent\"" } "json:\"red-blue\""; Yellow struct { BackDefault string "json:\"back_default\""; BackGray string "json:\"back_gray\""; BackTransparent string "json:\"back_transparent\""; FrontDefault string "json:\"front_default\""; FrontGray string "json:\"front_gray\""; FrontTransparent string "json:\"front_transparent\"" } "json:\"yellow\"" } "json:\"generation-i\""; GenerationIi struct { Crystal struct { BackDefault string "json:\"back_default\""; BackShiny string "json:\"back_shiny\""; BackShinyTransparent string "json:\"back_shiny_transparent\""; BackTransparent string "json:\"back_transparent\""; FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\""; FrontShinyTransparent string "json:\"front_shiny_transparent\""; FrontTransparent string "json:\"front_transparent\"" } "json:\"crystal\""; Gold struct { BackDefault string "json:\"back_default\""; BackShiny string "json:\"back_shiny\""; FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\""; FrontTransparent string "json:\"front_transparent\"" } "json:\"gold\""; Silver struct { BackDefault string "json:\"back_default\""; BackShiny string "json:\"back_shiny\""; FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\""; FrontTransparent string "json:\"front_transparent\"" } "json:\"silver\"" } "json:\"generation-ii\""; GenerationIii struct { Emerald struct { FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\"" } "json:\"emerald\""; FireredLeafgreen struct { BackDefault string "json:\"back_default\""; BackShiny string "json:\"back_shiny\""; FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\"" } "json:\"firered-leafgreen\""; RubySapphire struct { BackDefault string "json:\"back_default\""; BackShiny string "json:\"back_shiny\""; FrontDefault string "json:\"front_default\""; FrontShiny string "json:\"front_shiny\"" } "json:\"ruby-sapphire\"" } "json:\"generation-iii\""; GenerationIv struct { DiamondPearl struct { BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"diamond-pearl\""; HeartgoldSoulsilver struct { BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"heartgold-soulsilver\""; Platinum struct { BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"platinum\"" } "json:\"generation-iv\""; GenerationV struct { BlackWhite struct { Animated struct { BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"animated\""; BackDefault string "json:\"back_default\""; BackFemale interface {} "json:\"back_female\""; BackShiny string "json:\"back_shiny\""; BackShinyFemale interface {} "json:\"back_shiny_female\""; FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"black-white\"" } "json:\"generation-v\""; GenerationVi struct { OmegarubyAlphasapphire struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"omegaruby-alphasapphire\""; XY struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"x-y\"" } "json:\"generation-vi\""; GenerationVii struct { Icons struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\"" } "json:\"icons\""; UltraSunUltraMoon struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\""; FrontShiny string "json:\"front_shiny\""; FrontShinyFemale interface {} "json:\"front_shiny_female\"" } "json:\"ultra-sun-ultra-moon\"" } "json:\"generation-vii\""; GenerationViii struct { Icons struct { FrontDefault string "json:\"front_default\""; FrontFemale interface {} "json:\"front_female\"" } "json:\"icons\"" } "json:\"generation-viii\"" } "json:\"versions\"" }
	    sprites: any;
	    stats: [];
	    types: [];
	    weight: number;
	
	    static createFrom(source: any = {}) {
	        return new Pokemon(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.abilities = this.convertValues(source["abilities"], );
	        this.base_experience = source["base_experience"];
	        this.cries = this.convertValues(source["cries"], Object);
	        this.forms = this.convertValues(source["forms"], );
	        this.game_indices = this.convertValues(source["game_indices"], );
	        this.height = source["height"];
	        this.held_items = this.convertValues(source["held_items"], );
	        this.id = source["id"];
	        this.is_default = source["is_default"];
	        this.location_area_encounters = source["location_area_encounters"];
	        this.moves = this.convertValues(source["moves"], );
	        this.name = source["name"];
	        this.order = source["order"];
	        this.past_abilities = source["past_abilities"];
	        this.past_types = source["past_types"];
	        this.species = this.convertValues(source["species"], Object);
	        this.sprites = this.convertValues(source["sprites"], Object);
	        this.stats = this.convertValues(source["stats"], );
	        this.types = this.convertValues(source["types"], );
	        this.weight = source["weight"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}


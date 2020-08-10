import { Index, MinimongoEngine } from 'meteor/easy:search';
import {Jokes} from '/imports/api/jokes/collection.js';

JokesIndex = new Index({
    Collection: Jokes,
    fields: ['jokeName'],
    engine: new MinimongoEngine({
        sort(){
            return {createdAt: -1};
        },
        selector(searchObject, options, aggregation){
            let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
            categoryFilter = options.search.props.categoryFilter;

            if(_.isString(categoryFilter)&& !_.isEmpty(categoryFilter)){
                selector.category = categoryFilter;
            }

            return selector;
        }
    }), 
})
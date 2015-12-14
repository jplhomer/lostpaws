import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                name: 'Shadow',
                type: 'Dog',
                color: 'Golden',
                breed: 'Golden Retriever',
                details: 'Last seen on University Ave'
            },
            {
                name: 'Sassy',
                type: 'Cat',
                color: 'Calico',
                breed: 'American House Cat',
                details: 'Last spotted with her food on the porch'
            },
            {
                name: 'Chance',
                type: 'Dog',
                color: 'White',
                breed: 'American Bulldog',
                details: 'Recently caught eating trash out of the kitchen'
            }
        ]
    }
});

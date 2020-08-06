import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/components/jokes/jokes.js';
import '/imports/ui/components/login/login.js';
import '/imports/ui/components/signUp/signUp.js';
import '/imports/ui/components/profile/profile.js';
import '/imports/ui/components/rankings/rankings.js';
import '/imports/ui/components/search/search.js';


// Import needed templates
import '../../ui/layouts/body/body.js';

// Set 1All Routes

FlowRouter.route('/jokes', {
  name: 'jokes',
  action(){
      BlazeLayout.render('main_layout', {main:'jokes'});
  }
});


FlowRouter.route('/login', {
  name: 'login',
  action(){
      BlazeLayout.render('main_layout', {main:'login'});
  }
});


FlowRouter.route('/', {
  name: 'signup',
  action(){
      BlazeLayout.render('main_layout', {main:'signup'});
  }
});


FlowRouter.route('/profile', {
  name: 'profile',
  action(){
      BlazeLayout.render('main_layout', {main:'profile'});
  }
});



FlowRouter.route('/rankings', {
  name: 'rankings',
  action(){
      BlazeLayout.render('main_layout', {main:'rankings'});
  }
});

FlowRouter.route('/search', {
  name: 'search',
  action(){
      BlazeLayout.render('main_layout', {main:'search'});
  }
});


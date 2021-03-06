describe('the visible binding', function () {

	it('should toggle the visibility of the bound element', function() {

		this.model = new AModel({isVisible: true});
		this.view = new FixtureView({model: this.model});
		_.extend(this.view, {
			modelBindings: {
				'#anchor': {
					visible: Backbone.outback.modelRef('isVisible')
				}	
			}
		})

		this.view.render();
		this.el = this.view.$('#anchor');

		expect(this.el.is(":visible")).toBeTruthy();

		this.model.set({isVisible: false});
		expect(this.el.is(":visible")).toBeFalsy();

		this.model.set({isVisible: 'a string'});
		expect(this.el.is(":visible")).toBeTruthy();

		this.view.remove();
	});

});

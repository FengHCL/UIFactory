define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'glassId', () => {
                return this._glassId;
            });
            defineSetter(this, 'glassId', value => {
                this._glassId = value;
            });
        }
	};
});
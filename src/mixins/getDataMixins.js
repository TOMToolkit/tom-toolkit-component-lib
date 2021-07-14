import axios from "axios";

export var getDataMixin = {
    /*
    Mixin to retrieve a single response from the observation portal API given an endpoint to query.
    The `initializeDataEndpoint()` function must be overridden. This mixin works well with the DataLoader
    component.
    */
    data: function() {
      const dataEndpoint = this.initializeDataEndpoint();
      return {
        dataLoadError: false,
        dataLoaded: false,
        dataNotFound: false,
        data: this.initializeEmptyData(),
        dataEndpoint: dataEndpoint
      };
    },
    created: function() {
      this.getData();
    },
    methods: {
      initializeDataEndpoint: function() {
        // Override this method to initialize the endpoint from which data will be retrieved.
        return '';
      },
      setDataEndpoint: function(newEndpoint) {
        this.dataEndpoint = newEndpoint;
      },
      initializeEmptyData: function() {
        return {};
      },
      getData: function() {
        this.clearLoadStates();
        //let that = this;
        axios
          .get(this.dataEndpoint)
          .then(response => {
            this.successCallback(response);
          })
          .catch(
            error => {
                console.log('error');
              console.log(error);
            }
          );
      },
      clearLoadStates: function() {
        this.dataLoaded = false;
        this.dataLoadError = false;
        this.dataNotFound = false;
      },
      failCallback: function(response) {
        if (response.status === 404 || response.status === 403) {
          this.dataNotFound = true;
        } else {
          this.dataLoadError = true;
        }
        this.onDataRetrievalError(response);
      },
      successCallback: function(response) {
        this.data = response;
        this.onSuccessfulRetrieval(response);
      },
      onSuccessfulRetrieval: function(response) {
        // Override this function to run an action when data retrieval is successful.
        return response;
      },
      onDataRetrievalError: function(response) {
        // Override this function to run an action when data retrieval errors.
        return response;
      }
    }
  };
  
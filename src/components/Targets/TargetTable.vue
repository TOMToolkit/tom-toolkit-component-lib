<template>
    <b-container>
        <div>This is a TargetTable</div>
        <b-table 
            striped
            :fields="targetFields"
            :items="targets">
        </b-table>
    </b-container>
</template>

<script>
export default {
    name: 'TargetTable',
    components: {},
    props: {
      targets: {
        type: Array,
        required: true
        },
    },
    data() {
        return {
            targetFields: [
                { 'key': 'id', 'sortable': true },
                { 'key': 'name', 'sortable': true },
                { 'key': 'ra' },
                { 'key': 'dec' },
            ],
//            targets: []
        }
    },
    methods: {
    },

    // created() {
    //     console.log("TargetTable.created: BEGIN");
    //     console.log("TargetTable.created: END");
    // },

    // mounted() {
    //     console.log("TargetTable.mounted: BEGIN");
    //     console.log("this.tomApiEndpoint: " + this.tomApiEndpoint);
    //     axios
    //         .get(this.tomApiEndpoint + '/api/targets/')
    //         .then(response => {
    //             console.log("axios.then: BEGIN");
    //             console.log(response);
    //             // results key is only present when djangorestframework page size exists in settings.py
    //             this.targets = response['data']['results'];
    //             console.log("this.targets: " + this.targets);
    //             console.log("axios.then: END");
    //         })
    //         .catch(
    //             error => {
    //                 console.log("axios.catch: BEGIN");
    //                 console.log(error);
    //                 console.log("axios.catch: END");
    //             }
    //         );
    //     console.log("TargetTable.mounted: END");
    // }
}
</script>

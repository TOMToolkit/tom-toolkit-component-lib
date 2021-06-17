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
import axios from 'axios';

export default {
    name: 'TargetTable',
    components: {},
    data() {
        return {
            targetFields: [
                { 'key': 'id', 'sortable': true },
                { 'key': 'name', 'sortable': true },
                { 'key': 'ra' },
                { 'key': 'dec' },
            ],
            targets: []
        }
    },
    methods: {
        initializeDataEndpoint: function() {
            return 'http://127.0.0.1:8000/api/targets/'; // TODO: make this configurable
        },
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/targets/')
            .then(response => {
                console.log(response);
                // results key is only present when djangorestframework page size exists in settings.py
                this.targets = response['data']['results'];
                console.log(this.targets);
            })
            .catch(
                error => {
                    console.log(error);
                }
            );
    }
}
</script>

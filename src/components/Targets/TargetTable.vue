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
            targets: [
                {'name': 'M31', 'type': 'SIDEREAL', 'observations': 2, 'saved_data': 2},
                {'name': 'M41', 'type': 'SIDEREAL', 'observations': 0, 'saved_data': 0},
            ]
        }
    },
    methods: {
        initializeDataEndpoint: function() {
            return 'http://localhost:8000/api/targets/'; // TODO: make this configurable
        },
    },
    mounted() {
        axios
            .get('http://localhost:8000/api/targets/')
            .then(response => {
                console.log(response);
                this.targets = response['data']['results'];
                console.log(this.targets);
            });
    }
}
</script>

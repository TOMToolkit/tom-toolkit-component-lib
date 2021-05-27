<template>
    <b-container>
        <div>This is a TargetTable</div>
        <b-table striped :items="items">
        </b-table>
    </b-container>
</template>
<script>

export default {
    name: 'TargetTable',
    components: {},
    data() {
        return {
            items: [
                {'name': 'M31', 'type': 'SIDEREAL', 'observations': 2, 'saved_data': 2},
                {'name': 'M41', 'type': 'SIDEREAL', 'observations': 0, 'saved_data': 0},
            ]
        }
    },
    methods: {
        initializeDataEndpoint: function() {
            return 'http://localhost:8000/api/targets/'; // TODO: make this configurable
        },
    }
}
</script>

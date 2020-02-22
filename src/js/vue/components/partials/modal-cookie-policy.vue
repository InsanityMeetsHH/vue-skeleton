<script>
    export default {
        
    };
</script>

<template>
    <div class="modal fade" id="cookie-policy" tabindex="-1" role="dialog" aria-labelledby="cookie-policy-title" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $t("cookie-policy-title") }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {{ $t("cl-message") }}<br/>
                    <button class="btn btn-primary mt-2" type="button" data-toggle="collapse" data-target="#cookie-policy-collapse" aria-expanded="false" aria-controls="cookie-policy-collapse">{{ $t("cpm-sdi") }}</button>

                    <div class="collapse" id="cookie-policy-collapse">
                        <div class="table-responsive mt-3">
                            <table class="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col"><span class="text-nowrap">{{ $t("name") }}</span></th>
                                        <th scope="col"><span class="text-nowrap">{{ $t("provider") }}</span></th>
                                        <th scope="col"><span class="text-nowrap">{{ $t("purpose") }}</span></th>
                                        <th scope="col"><span class="text-nowrap">{{ $t("expires") }}</span></th>
                                        <th scope="col"><span class="text-nowrap">{{ $t("type", ['']) }}</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>cookieconsent_status</td>
                                        <td>vue.insanitymeetshh.net</td>
                                        <td>{{ $t("cpm-cc-status") }}</td>
                                        <td><span class="text-nowrap">{{ $t("year", ['1']) }}</span></td>
                                        <td><span class="text-nowrap">{{ $t("type", ['2']) }}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pb-3">
                                {{ $t("cpm-type1") }}<br/>
                                {{ $t("cpm-type2") }}<br/>
                                {{ $t("cpm-type3") }}<br/>
                                {{ $t("cpm-type4") }}<br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

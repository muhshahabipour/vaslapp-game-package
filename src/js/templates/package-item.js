

export const getPackageTemplate = function (option, data) {
    return `${data.map((obj, i) => 
            `<div class="col-xs-12" id="createPackageDiv-${obj.id}" data-index="${i}">
                <div class="panel panel-white" style="box-shadow: 0 3px 9px 0 rgba(0,0,0,.03);">
                    <div class="panel-body">
                        <div class="flexbox">
                            <div style="margin-left: 8px;">
                                <a role="button" href="javascript:void(0)" data-id="${obj.id}" class="remove-section"><span data-ico="global" class="wi wi-minuse-icon"></span></a>
                            </div>
                            <div class="flexbox flexbox-col" style="border-right: 1px solid #dddddd;padding-right: 16px;flex: 1;">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6 col-lg-4">
                                        <div class="form form-group">
                                            <label for="point-${obj.id}">امتیاز</label>
                                            <div class="form-select">
                                                <select class="form-entry" name="packageModels[${i}].pointId" id="point-${obj.id}" value="${obj.point}" data-id="${obj.id}" data-name="point">
                                                    <option value="">یک متغیر را انتخاب کنید</option>
                                                    ${typeof option !== "undefined" ? option.map(item => `<option value="${item.name}" ${obj.point == item.name ? `selected="selected"`: ``}>${item.title}</option>`).join('') : ``}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                                        <div class="form form-group">
                                            <label for="number-${obj.id}">تعداد</label>
                                            <input type="text" class="form-entry" name="packageModels[${i}].number" id="number-${obj.id}" value="${obj.count}" data-id="${obj.id}" data-name="count">
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                                        <div class="form form-group">
                                            <label for="price-${obj.id}">قیمت</label>
                                            <input type="text" class="form-entry" name="packageModels[${i}].price" id="price-${obj.id}" value="${obj.price}" data-id="${obj.id}" data-name="price">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    ).join('')}`
}
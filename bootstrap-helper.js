let b3 = undefined;
let b4 = undefined;

(() => {
    b3 = new Bootstrap3();
    b4 = new Bootstrap4();

    function Bootstrap3() {

        this.AFFIX = "affix";
        this.BADGE = "badge";
        this.CLEARFIX = "clearfix";
        this.COLLAPSE = "collapse";
        this.COLLAPSING = "collapsing"
        this.CONTAINER = "container";
        this.CONTAINER_FLUID = "container-fluid";
        this.GLYPHICON = "glyphicon";
        this.JUMBOTRON = "jumbotron";
        this.PAGE_HEADER = "page-header";
        this.POPOVER = "popover";
        this.TOOLTIP = "tooltip";

        this.Alert = {
            ALERT: "alert",
            ALERT_DANGER: "alert-danger",
            ALERT_DISMISSIBLE: "alert-dismissible",
            ALERT_INFO: "alert-info",
            ALERT_LINK: "alert-link",
            ALERT_SUCCESS: "alert-success",
            ALERT_WARNING: "alert-warning",
            FADE: "fade"
        }

        this.Grid = {
            ROW: "row"
        }

        this.ExtraSmallColumns = {
            XS1: "col-xs-1",
            XS2: "col-xs-2",
            XS3: "col-xs-3",
            XS4: "col-xs-4",
            XS5: "col-xs-5",
            XS6: "col-xs-6",
            XS7: "col-xs-7",
            XS8: "col-xs-8",
            XS9: "col-xs-9",
            XS10: "col-xs-10",
            XS11: "col-xs-11",
            XS12: "col-xs-12"
        }

        this.SmallColumns = {
            SM1: "col-sm-1",
            SM2: "col-sm-2",
            SM3: "col-sm-3",
            SM4: "col-sm-4",
            SM5: "col-sm-5",
            SM6: "col-sm-6",
            SM7: "col-sm-7",
            SM8: "col-sm-8",
            SM9: "col-sm-9",
            SM10: "col-sm-10",
            SM11: "col-sm-11",
            SM12: "col-sm-12"
        }

        this.MediumColumns = {
            MD1: "col-md-1",
            MD2: "col-md-2",
            MD3: "col-md-3",
            MD4: "col-md-4",
            MD5: "col-md-5",
            MD6: "col-md-6",
            MD7: "col-md-7",
            MD8: "col-md-8",
            MD9: "col-md-9",
            MD10: "col-md-10",
            MD11: "col-md-11",
            MD12: "col-md-12"
        }

        this.LargeColumns = {
            LG1: "col-lg-1",
            LG2: "col-lg-2",
            LG3: "col-lg-3",
            LG4: "col-lg-4",
            LG5: "col-lg-5",
            LG6: "col-lg-6",
            LG7: "col-lg-7",
            LG8: "col-lg-8",
            LG9: "col-lg-9",
            LG10: "col-lg-10",
            LG11: "col-lg-11",
            LG12: "col-lg-12"
        }


        this.Form = {
            FORM_CONTROL: "form-control"
        }

        this.Typography = {

            TEXT_NO_WRAP: "text-nowrap",
            TEXT_MUTED: "text-muted",
            TEXT_HIDE: "text-hide",
            SMALL: "small",
            MARK: "mark",
            LIST_UNSTYLED: "list-unstyled",
            LEAD: "lead",
            INITIALISM: "initialism",
            DL_HORIZONTAL: "dl-horizontal",

            Casing: {
                TEXT_CAPITALIZE: "text-capitalize",
                TEXT_UPPERCASE: "text-uppercase",
                TEXT_LOWERCASE: "text-lowercase"
            },

            Color: {
                TEXT_WARNING: "text-warning",
                TEXT_SUCCESS: "text-success",
                TEXT_PRIMARY: "text-primary",
                TEXT_INFO: "text-info",
                TEXT_DANGER: "text-danger"
            },

            Alignment: {
                TEXT_RIGHT: "text-right",
                TEXT_LEFT: "text-left",
                TEXT_JUSTIFY: "text-justify",
                TEXT_CENTER: "text-center"
            },

            Heading: {
                H1: "h1",
                H2: "h2",
                H3: "h3",
                H4: "h4",
                H5: "h5",
                H6: "h6"
            }
        }

        this.Media = {
            MEDIA: "media",
            MEDIA_BODY: "media-body",
            MEDIA_HEADING: "media-heading",
            MEDIA_LIST: "media-list",
            MEDIA_OBJECT: "media-object"
        }

        this.Modal = {
            MODAL: "modal",
            MODAL_BODY: "modal-body",
            MODAL_CONTENT: "modal-content",
            MODAL_DIALOG: "modal-dialog",
            MODAL_FOOTER: "modal-footer",
            MODAL_HEADER: "modal-header",
            MODAL_LARGE: "modal-lg",
            MODAL_OPEN: "modal-open",
            MODAL_SMALL: "modal-sm",
            MODAL_TITLE: "modal-title"
        }

        this.Pager = {
            NEXT: "next",
            PAGER: "pager",
            PREVIOUS: "previous"
        }

        this.Panel = {
            PANEL: "panel",
            PANEL_BODY: "panel-body",
            PANEL_COLLAPSE: "panel-collapse",
            PANEL_DANGER: "panel-danger",
            PANEL_FOOTER: "panel-footer",
            PANEL_GROUP: "panel-group",
            PANEL_HEADING: "panel-heading",
            PANEL_INFO: "panel-info",
            PANEL_SUCCESS: "panel-success",
            PANEL_TITLE: "panel-title",
            PANEL_WARNING: "panel-warning"
        }

        this.ProgressBar = {
            ACTIVE: "active",
            PROGRESS: "progress",
            PROGRESS_BAR: "progress-bar",
            PROGRESS_BAR_DANGER: "progress-bar-danger",
            PROGRESS_BAR_INFO: "progress-bar-info",
            PROGRESS_BAR_STRIPED: "progress-bar-striped",
            PROGRESS_BAR_SUCCESS: "progress-bar-success",
            PROGRESS_BAR_WARNING: "progress-bar-warning"
        }

        this.Well = {
            WELL: "well",
            WELL_LARGE: "well-lg",
            WELL_SMALL: "well-sm"
        }

    }

    function Bootstrap4() {

    }

})();
let $b3 = undefined;
let $b4 = undefined;
let $glyphicon = undefined;

(() => {
    $b3 = new Bootstrap3();
    $b4 = new Bootstrap4();
    $glyphicon = new Glyphicon();

    function Bootstrap3() {
        this.Alert = {
            ALERT: "alert",
            ALERT_DANGER: "alert-danger",
            ALERT_DISMISSIBLE: "alert-dismissible",
            ALERT_INFO: "alert-info",
            ALERT_LINK: "alert-link",
            ALERT_SUCCESS: "alert-success",
            ALERT_WARNING: "alert-warning",
            FADE: "fade"
        };

        this.ButtonGroups = {
            BUTTON_GROUP: "btn-group",
            BUTTON_GROUP_EXTRA_SMALL: "btn-group-xs",
            BUTTON_GROUP_JUSTIFIED: "btn-group-justified",
            BUTTON_GROUP_LARGE: "btn-group-lg",
            BUTTON_GROUP_SMALL: "btn-group-sm",
            BUTTON_GROUP_VERTICAL: "btn-group-vertical",
            BUTTON_TOOLBAR: "btn-toolbar"
        };

        this.Buttons = {
            BUTTON: "btn",
            BUTTON_BLOCK: "btn-block",
            BUTTON_DANGER: "btn-danger",
            BUTTON_DEFAULT: "btn-default",
            BUTTON_EXTRA_SMALL: "btn-xs",
            BUTTON_INFO: "btn-info",
            BUTTON_LARGE: "btn-lg",
            BUTTON_LINK: "btn-link",
            BUTTON_PRIMARY: "btn-primary",
            BUTTON_SMALL: "btn-sm",
            BUTTON_SUCCESS: "btn-success",
            BUTTON_WARNING: "btn-warning",
        };

        this.Carousel = {
            CAROUSEL: "carousel",
            CAROUSEL_CAPTION: "carousel-caption",
            CAROUSEL_CONTROL: "carousel-control",
            CAROUSEL_INDICATORS: "carousel-indicators",
            CAROUSEL_INNER: "carousel-inner",
            ICON_NEXT: "icon-next",
            ICON_PREVIOUS: "icon-prev",
            ITEM: "item",
            LEFT: "left",
            NEXT: "next",
            PREVIOUS: "prev",
            RIGHT: "right"
        };

        this.Dropdown = {
            CARET: "caret",
            DIVIDER: "divider",
            DROPDOWN: "dropdown",
            DROPDOWN_BACKDROP: "dropdown-backdrop",
            DROPDOWN_HEADER: "dropdown-header",
            DROPDOWN_MENU: "dropdown-menu",
            DROPDOWN_MENU_LEFT: "dropdown-menu-left",
            DROPDOWN_MENU_RIGHT: "dropdown-menu-right",
            DROPDOWN_TOGGLE: "dropdown-toggle",
            DROPUP: "dropup"
        };

        this.Forms = {
            CHECKBOX: "checkbox",
            CHECKBOX_INLINE: "checkbox-inline",
            CONTROL_LABEL: "control-label",
            FORM_CONTROL: "form-control",
            FORM_CONTROL_FEEDBACK: "form-control-feedback",
            FORM_CONTROL_STATIC: "form-control-static",
            FORM_GROUP: "form-group",
            FORM_HORIZONTAL: "form-horizontal",
            FORM_INLINE: "form-inline",
            HAS_ERROR: "has-error",
            HAS_FEEDBACK: "has-feedback",
            HAS_SUCCESS: "has-success",
            HAS_WARNING: "has-warning",
            HELP_BLOCK: "help-block",
            INPUT_LARGE: "input-lg",
            INPUT_SMALL: "input-sm",
            RADIO: "radio",
            RADIO_INLINE: "radio-inline",

            InputGroups = {
                INPUT_GROUP: "input-group",
                INPUT_GROUP_ADDON: "input-group-addon",
                INPUT_GROUP_BUTTON: "input-group-btn",
                INPUT_GROUP_LARGE: "input-group-lg",
                INPUT_GROUP_SMALL: "input-group-sm"
            },

            Labels: {
                LABEL: "label",
                LABEL_DANGER: "label-danger",
                LABEL_DEFAULT: "label-default",
                LABEL_INFO: "label-info",
                LABEL_PRIMARY: "label-primary",
                LABEL_SUCCESS: "label-success",
                LABEL_WARNING: "label-warning"
            }
        };

        this.Grid = {
            CONTAINER: "container",
            CONTAINER_FLUID: "container-fluid",
            ROW: "row",
            ROW_NO_GUTTERS: "row-no-gutters",

            ExtraSmallColumns: {
                Columns: {
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
                },

                Offset: {
                    XS0: "col-xs-offset-0",
                    XS1: "col-xs-offset-1",
                    XS2: "col-xs-offset-2",
                    XS3: "col-xs-offset-3",
                    XS4: "col-xs-offset-4",
                    XS5: "col-xs-offset-5",
                    XS6: "col-xs-offset-6",
                    XS7: "col-xs-offset-7",
                    XS8: "col-xs-offset-8",
                    XS9: "col-xs-offset-9",
                    XS10: "col-xs-offset-10",
                    XS11: "col-xs-offset-11",
                    XS12: "col-xs-offset-12"
                },

                Pull: {
                    XS0: "col-xs-pull-0",
                    XS1: "col-xs-pull-1",
                    XS2: "col-xs-pull-2",
                    XS3: "col-xs-pull-3",
                    XS4: "col-xs-pull-4",
                    XS5: "col-xs-pull-5",
                    XS6: "col-xs-pull-6",
                    XS7: "col-xs-pull-7",
                    XS8: "col-xs-pull-8",
                    XS9: "col-xs-pull-9",
                    XS10: "col-xs-pull-10",
                    XS11: "col-xs-pull-11",
                    XS12: "col-xs-pull-12"
                },

                Push: {
                    XS0: "col-xs-push-0",
                    XS1: "col-xs-push-1",
                    XS2: "col-xs-push-2",
                    XS3: "col-xs-push-3",
                    XS4: "col-xs-push-4",
                    XS5: "col-xs-push-5",
                    XS6: "col-xs-push-6",
                    XS7: "col-xs-push-7",
                    XS8: "col-xs-push-8",
                    XS9: "col-xs-push-9",
                    XS10: "col-xs-push-10",
                    XS11: "col-xs-push-11",
                    XS12: "col-xs-push-12"
                }
            },

            LargeColumns: {
                Columns: {
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
                },

                Offset: {
                    LG0: "col-lg-offset-0",
                    LG1: "col-lg-offset-1",
                    LG2: "col-lg-offset-2",
                    LG3: "col-lg-offset-3",
                    LG4: "col-lg-offset-4",
                    LG5: "col-lg-offset-5",
                    LG6: "col-lg-offset-6",
                    LG7: "col-lg-offset-7",
                    LG8: "col-lg-offset-8",
                    LG9: "col-lg-offset-9",
                    LG10: "col-lg-offset-10",
                    LG11: "col-lg-offset-11",
                    LG12: "col-lg-offset-12"
                },

                Pull: {
                    LG0: "col-lg-pull-0",
                    LG1: "col-lg-pull-1",
                    LG2: "col-lg-pull-2",
                    LG3: "col-lg-pull-3",
                    LG4: "col-lg-pull-4",
                    LG5: "col-lg-pull-5",
                    LG6: "col-lg-pull-6",
                    LG7: "col-lg-pull-7",
                    LG8: "col-lg-pull-8",
                    LG9: "col-lg-pull-9",
                    LG10: "col-lg-pull-10",
                    LG11: "col-lg-pull-11",
                    LG12: "col-lg-pull-12"
                },

                Push: {
                    LG0: "col-lg-push-0",
                    LG1: "col-lg-push-1",
                    LG2: "col-lg-push-2",
                    LG3: "col-lg-push-3",
                    LG4: "col-lg-push-4",
                    LG5: "col-lg-push-5",
                    LG6: "col-lg-push-6",
                    LG7: "col-lg-push-7",
                    LG8: "col-lg-push-8",
                    LG9: "col-lg-push-9",
                    LG10: "col-lg-push-10",
                    LG11: "col-lg-push-11",
                    LG12: "col-lg-push-12"
                }
            },

            MediumColumns: {
                Columns: {
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
                },

                Offset: {
                    MD0: "col-md-offset-0",
                    MD1: "col-md-offset-1",
                    MD2: "col-md-offset-2",
                    MD3: "col-md-offset-3",
                    MD4: "col-md-offset-4",
                    MD5: "col-md-offset-5",
                    MD6: "col-md-offset-6",
                    MD7: "col-md-offset-7",
                    MD8: "col-md-offset-8",
                    MD9: "col-md-offset-9",
                    MD10: "col-md-offset-10",
                    MD11: "col-md-offset-11",
                    MD12: "col-md-offset-12"
                },

                Pull: {
                    MD0: "col-md-pull-0",
                    MD1: "col-md-pull-1",
                    MD2: "col-md-pull-2",
                    MD3: "col-md-pull-3",
                    MD4: "col-md-pull-4",
                    MD5: "col-md-pull-5",
                    MD6: "col-md-pull-6",
                    MD7: "col-md-pull-7",
                    MD8: "col-md-pull-8",
                    MD9: "col-md-pull-9",
                    MD10: "col-md-pull-10",
                    MD11: "col-md-pull-11",
                    MD12: "col-md-pull-12"
                },

                Push: {
                    MD0: "col-md-push-0",
                    MD1: "col-md-push-1",
                    MD2: "col-md-push-2",
                    MD3: "col-md-push-3",
                    MD4: "col-md-push-4",
                    MD5: "col-md-push-5",
                    MD6: "col-md-push-6",
                    MD7: "col-md-push-7",
                    MD8: "col-md-push-8",
                    MD9: "col-md-push-9",
                    MD10: "col-md-push-10",
                    MD11: "col-md-push-11",
                    MD12: "col-md-push-12"
                }
            },

            SmallColumns: {
                Columns: {
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
                },

                Offset: {
                    SM0: "col-sm-offset-0",
                    SM1: "col-sm-offset-1",
                    SM2: "col-sm-offset-2",
                    SM3: "col-sm-offset-3",
                    SM4: "col-sm-offset-4",
                    SM5: "col-sm-offset-5",
                    SM6: "col-sm-offset-6",
                    SM7: "col-sm-offset-7",
                    SM8: "col-sm-offset-8",
                    SM9: "col-sm-offset-9",
                    SM10: "col-sm-offset-10",
                    SM11: "col-sm-offset-11",
                    SM12: "col-sm-offset-12"
                },

                Pull: {
                    SM0: "col-sm-pull-0",
                    SM1: "col-sm-pull-1",
                    SM2: "col-sm-pull-2",
                    SM3: "col-sm-pull-3",
                    SM4: "col-sm-pull-4",
                    SM5: "col-sm-pull-5",
                    SM6: "col-sm-pull-6",
                    SM7: "col-sm-pull-7",
                    SM8: "col-sm-pull-8",
                    SM9: "col-sm-pull-9",
                    SM10: "col-sm-pull-10",
                    SM11: "col-sm-pull-11",
                    SM12: "col-sm-pull-12"
                },

                Push: {
                    SM0: "col-sm-push-0",
                    SM1: "col-sm-push-1",
                    SM2: "col-sm-push-2",
                    SM3: "col-sm-push-3",
                    SM4: "col-sm-push-4",
                    SM5: "col-sm-push-5",
                    SM6: "col-sm-push-6",
                    SM7: "col-sm-push-7",
                    SM8: "col-sm-push-8",
                    SM9: "col-sm-push-9",
                    SM10: "col-sm-push-10",
                    SM11: "col-sm-push-11",
                    SM12: "col-sm-push-12"
                }
            }
        };

        this.Helper = {
            AFFIX : "affix",
            BADGE : "badge",
            BLOCKQUOTE_REVERSE: "blockquote-reverse",
            BREADCRUMB : "breadcrumb",
            CENTER_BLOCK: "center-block",
            CLEARFIX: "clearfix",
            CLOSE: "close",
            COLLAPSE : "collapse",
            COLLAPSING : "collapsing",
            HIDE: "hide",
            INVISIBLE: "invisible",
            JUMBOTRON : "jumbotron",    
            OPEN: "open",
            PAGE_HEADER : "page-header",
            PRE_SCROLLABLE : "pre-scrollable",
            PULL_LEFT: "pull-left",
            PULL_RIGHT: "pull-right",
            SCREEN_READER_ONLY: "sr-only",
            SCREEN_READER_ONLY_FOCUSABLE: "sr-only-focusable",
            SHOW: "show",

            BackgroundColor: {
                BACKGROUND_DANGER: "bg-danger",
                BACKGROUND_INFO: "bg-info",
                BACKGROUND_PRIMARY: "bg-primary",
                BACKGROUND_SUCCESS: "bg-success",
                BACKGROUND_WARNING: "bg-warning"
            },

            State: {
                ACTIVE: "active",
                DANGER: "danger",
                DISABLED: "disabled",
                INFO: "info",
                SUCCESS: "success",
                WARNING: "warning"
            }
        }

        this.Images = {
            IMAGE_CIRCLE: "img-circle",
            IMAGE_RESPONSIVE: "img-responsive",
            IMAGE_ROUNDED: "img-rounded",
            IMAGE_THUMBNAIL: "img-thumbnail"
        };

        this.List = {
            DL_HORIZONTAL: "dl-horizontal",
            LIST_INLINE: "list-inline",
            LIST_UNSTYLED: "list-unstyled"
        }

        this.ListGroup = {
            LIST_GROUP: "list-group",
            LIST_GROUP_ITEM: "list-group-item",
            LIST_GROUP_ITEM_DANGER: "list-group-item-danger",
            LIST_GROUP_ITEM_HEADING: "list-group-item-heading",
            LIST_GROUP_ITEM_INFO: "list-group-item-info",
            LIST_GROUP_ITEM_SUCCESS: "list-group-item-success",
            LIST_GROUP_ITEM_TEXT: "list-group-item-text",
            LIST_GROUP_ITEM_WARNING: "list-group-item-warning"
        };

        this.Media = {
            MEDIA: "media",
            MEDIA_BODY: "media-body",
            MEDIA_HEADING: "media-heading",
            MEDIA_LIST: "media-list",
            MEDIA_OBJECT: "media-object"
        }

        this.Modal = {
            MODAL: "modal",
            MODAL_BACKDROP: "modal-backdrop",
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

        this.Navigation = {
            ICON_BAR: "icon-bar",

            Nav: {
                NAV: "nav",
                NAV_DIVIDER: "nav-divider",
                NAV_JUSTIFIED: "nav-justified",
                NAV_PILLS: "nav-pills",
                NAV_STACKED: "nav-stacked",
                NAV_TABS: "nav-tabs",
                NAV_TABS_JUSTIFIED: "nav-tabs-justified"
            },

            Navbar: {
                NAVBAR: "navbar",
                NAVBAR_BRAND: "navbar-brand",
                NAVBAR_BUTTON: "navbar-btn",
                NAVBAR_COLLAPSE: "navbar-collapse",
                NAVBAR_DEFAULT: "navbar-default",
                NAVBAR_FIXED_BOTTOM: "navbar-fixed-bottom",
                NAVBAR_FIXED_TOP: "navbar-fixed-top",
                NAVBAR_FORM: "navbar-form",
                NAVBAR_HEADER: "navbar-header",
                NAVBAR_INVERSE: "navbar-inverse",
                NAVBAR_LEFT: "navbar-left",
                NAVBAR_LINK: "navbar-link",
                NAVBAR_NAV: "navbar-nav",
                NAVBAR_RIGHT: "navbar-right",
                NAVBAR_STATIC_TOP: "navbar-static-top",
                NAVBAR_TEXT: "navbar-text",
                NAVBAR_TOGGLE: "navbar-toggle"
            }
        };

        this.Pagination = {
            PAGER: "pager",
            PAGINATION: "pagination",
            PAGINATION_LARGE: "pagination-lg",
            PAGINATION_SMALL: "pagination-sm",
            PREVIOUS: "previous"
        };

        this.Panel = {
            PANEL: "panel",
            PANEL_BODY: "panel-body",
            PANEL_COLLAPSE: "panel-collapse",
            PANEL_DANGER: "panel-danger",
            PANEL_DEFAULT: "panel-default",
            PANEL_FOOTER: "panel-footer",
            PANEL_GROUP: "panel-group",
            PANEL_HEADING: "panel-heading",
            PANEL_INFO: "panel-info",
            PANEL_PRIMARY: "panel-primary",
            PANEL_SUCCESS: "panel-success",
            PANEL_TITLE: "panel-title",
            PANEL_WARNING: "panel-warning"
        };

        this.Popover = {
            ARROW: "arrow",
            POPOVER: "popover",
            POPOVER_CONTENT: "popover-content",
            POPOVER_TITLE: "popover-title"
        };

        this.ProgressBar = {
            PROGRESS: "progress",
            PROGRESS_BAR: "progress-bar",
            PROGRESS_BAR_DANGER: "progress-bar-danger",
            PROGRESS_BAR_INFO: "progress-bar-info",
            PROGRESS_BAR_STRIPED: "progress-bar-striped",
            PROGRESS_BAR_SUCCESS: "progress-bar-success",
            PROGRESS_BAR_WARNING: "progress-bar-warning"
        };

        this.Responsive = {
            Embed: {
                EMBED_RESPONSIVE: "embed-responsive",
                EMBED_REPONSIVE_16BY9: "embed-responsive-16by9",
                EMBED_RESPONSIVE_4BY3: "embed-responsive-4by3",
                EMBED_RESPONSIVE_ITEM: "embed-responsive-item"
            },

            Hidden: {
                HIDDEN: "hidden",
                HIDDEN_EXTRA_SMALL: "hidden-xs",
                HIDDEN_LARGE: "hidden-lg",
                HIDDEN_MEDIUM: "hidden-md",
                HIDDEN_PRINT: "hidden-print",
                HIDDEN_SMALL: "hidden-sm",
            },

            Visible: {
                VISIBLE_EXTRA_SMALL: "visible-xs",
                VISIBLE_LARGE: "visible-lg",
                VISIBLE_MEDIUM: "visible-md",
                VISIBLE_PRINT: "visible-print",
                VISIBLE_PRINT_BLOCK: "visible-print-block",
                VISIBLE_PRINT_INLINE: "visible-print-inline",
                VISIBLE_PRINT_INLINE_BLOCK: "visible-print-inline-block",
                VISIBLE_SMALL: "visible-sm"
            }
        };

        this.Tabs = {
            IN: "in",
            TAB_CONTENT: "tab-content",
            TAB_PANE: "tab-pane"
        };

        this.Tables = {
            TABLE: "table",
            TABLE_BORDERED: "table-bordered",
            TABLE_CONDENSED: "table-condensed",
            TABLE_HOVER: "table-hover",
            TABLE_RESPONSIVE: "table-responsive",
            TABLE_STRIPED: "table-striped",
        };

        this.Thumbnails = {
            CAPTION: "caption",
            THUMBNAIL: "thumbnail"
        };

        this.Tooltip = {
            BOTTOM: "bottom",
            BOTTOM_LEFT: "bottom-left",
            BOTTOM_RIGHT: "bottom-right",
            TOOLTIP: "tooltip",
            TOOLTIP_ARROW: "tooltip-arrow",
            TOOLTIP_INNER: "tooltip-inner",
            TOP: "top",
            TOP_LEFT: "top-left",
            TOP_RIGHT: "top-right"
        };

        this.Typography = {
            Alignment: {
                TEXT_RIGHT: "text-right",
                TEXT_LEFT: "text-left",
                TEXT_JUSTIFY: "text-justify",
                TEXT_CENTER: "text-center"
            },

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

            Heading: {
                H1: "h1",
                H2: "h2",
                H3: "h3",
                H4: "h4",
                H5: "h5",
                H6: "h6"
            },

            Size: {
                INITIALISM: "initialism",
                LEAD: "lead",
                SMALL: "small",
            },

            Style: {
                MARK: "mark",
                TEXT_HIDE: "text-hide",
                TEXT_MUTED: "text-muted",
                TEXT_NO_WRAP: "text-nowrap"
            }
        }

        this.Well = {
            WELL: "well",
            WELL_LARGE: "well-lg",
            WELL_SMALL: "well-sm"
        }

    }

    function Bootstrap4() {
        //TODO
    }

    function Glyphicon() {
        this.GLYPHICON = "glyphicon";
        this.GLYPHICON_ADJUST = "glyphicon-adjust";
        this.GLYPHICON_ALIGN_CENTER = "glyphicon-align-center";
        this.GLYPHICON_ALIGN_JUSTIFY = "glyphicon-align-justify";
        this.GLYPHICON_ALIGN_LEFT = "glyphicon-align-left";
        this.GLYPHICON_ALIGN_RIGHT = "glyphicon-align-right";
        this.GLYPHICON_ARROW_DOWN = "glyphicon-arrow-down";
        this.GLYPHICON_ARROW_LEFT = "glyphicon-arrow-left";
        this.GLYPHICON_ARROW_RIGHT = "glyphicon-arrow-right";
        this.GLYPHICON_ARROW_UP = "glyphicon-arrow-up";
        this.GLYPHICON_ASTERISK = "glyphicon-asterisk";
        this.GLYPHICON_BACKWARD = "glyphicon-backward";
        this.GLYPHICON_BAN_CIRCLE = "glyphicon-ban-circle";
        this.GLYPHICON_BARCODE = "glyphicon-barcode";
        this.GLYPHICON_BELL = "glyphicon-bell";
        this.GLYPHICON_BOLD = "glyphicon-bold";
        this.GLYPHICON_BOOK = "glyphicon-book";
        this.GLYPHICON_BOOKMARK = "glyphicon-bookmark";
        this.GLYPHICON_BRIEFCASE = "glyphicon-briefcase";
        this.GLYPHICON_BULLHORN = "glyphicon-bullhorn";
        this.GLYPHICON_CALENDAR = "glyphicon-calendar";
        this.GLYPHICON_CAMERA = "glyphicon-camera";
        this.GLYPHICON_CERTIFICATE = "glyphicon-certificate";
        this.GLYPHICON_CHECK = "glyphicon-check";
        this.GLYPHICON_CHEVRON_DOWN = "glyphicon-chevron-down";
        this.GLYPHICON_CHEVRON_LEFT = "glyphicon-chevron-left";
        this.GLYPHICON_CHEVRON_RIGHT = "glyphicon-chevron-right";
        this.GLYPHICON_CHEVRON_UP = "glyphicon-chevron-up";
        this.GLYPHICON_CIRCLE_ARROW_DOWN = "glyphicon-circle-arrow-down";
        this.GLYPHICON_CIRCLE_ARROW_LEFT = "glyphicon-circle-arrow-left";
        this.GLYPHICON_CIRCLE_ARROW_RIGHT = "glyphicon-circle-arrow-right";
        this.GLYPHICON_CIRCLE_ARROW_UP = "glyphicon-circle-arrow-up";
        this.GLYPHICON_CLOUD = "glyphicon-cloud";
        this.GLYPHICON_CLOUD_DOWNLOAD = "glyphicon-cloud-download";
        this.GLYPHICON_CLOUD_UPLOAD = "glyphicon-cloud-upload";
        this.GLYPHICON_COG = "glyphicon-cog";
        this.GLYPHICON_COLLAPSE_DOWN = "glyphicon-collapse-down";
        this.GLYPHICON_COLLAPSE_UP = "glyphicon-collapse-up";
        this.GLYPHICON_COMMENT = "glyphicon-comment";
        this.GLYPHICON_COMPRESSED = "glyphicon-compressed";
        this.GLYPHICON_COPYRIGHT_MARK = "glyphicon-copyright-mark";
        this.GLYPHICON_CREDIT_CARD = "glyphicon-credit-card";
        this.GLYPHICON_CUTLERY = "glyphicon-cutlery";
        this.GLYPHICON_DASHBOARD = "glyphicon-dashboard";
        this.GLYPHICON_DOWNLOAD = "glyphicon-download";
        this.GLYPHICON_DOWNLOAD_ALTERNATIVE = "glyphicon-download-alt";
        this.GLYPHICON_EARPHONE = "glyphicon-earphone";
        this.GLYPHICON_EDIT = "glyphicon-edit";
        this.GLYPHICON_EJECT = "glyphicon-eject";
        this.GLYPHICON_ENVELOPE = "glyphicon-envelope";
        this.GLYPHICON_EURO = "glyphicon-euro";
        this.GLYPHICON_EXCLAMATION_SIGN = "glyphicon-exclamation-sign";
        this.GLYPHICON_EXPAND = "glyphicon-expand";
        this.GLYPHICON_EXPORT = "glyphicon-export";
        this.GLYPHICON_EYE_CLOSE = "glyphicon-eye-close";
        this.GLYPHICON_EYE_OPEN = "glyphicon-eye-open";
        this.GLYPHICON_FACETIME_VIDEO = "glyphicon-facetime-video";
        this.GLYPHICON_FAST_BACKWARD = "glyphicon-fast-backward";
        this.GLYPHICON_FAST_FORWARD = "glyphicon-fast-forward";
        this.GLYPHICON_FILE = "glyphicon-file";
        this.GLYPHICON_FILM = "glyphicon-film";
        this.GLYPHICON_FILTER = "glyphicon-filter";
        this.GLYPHICON_FIRE = "glyphicon-fire";
        this.GLYPHICON_FLAG = "glyphicon-flag";
        this.GLYPHICON_FLASH = "glyphicon-flash";
        this.GLYPHICON_FLOPPY_DISK = "glyphicon-floppy-disk";
        this.GLYPHICON_FLOPPY_OPEN = "glyphicon-floppy-open";
        this.GLYPHICON_FLOPPY_REMOVE = "glyphicon-floppy-remove";
        this.GLYPHICON_FLOPPY_SAVE = "glyphicon-floppy-save";
        this.GLYPHICON_FLOPPY_SAVED = "glyphicon-floppy-saved";
        this.GLYPHICON_FOLDER_CLOSE = "glyphicon-folder-close";
        this.GLYPHICON_FOLDER_OPEN = "glyphicon-folder-open";
        this.GLYPHICON_FONT = "glyphicon-font";
        this.GLYPHICON_FORWARD = "glyphicon-forward";
        this.GLYPHICON_FULLSCREEN = "glyphicon-fullscreen";
        this.GLYPHICON_GBP = "glyphicon-gbp";
        this.GLYPHICON_GIFT = "glyphicon-gift";
        this.GLYPHICON_GLASS = "glyphicon-glass";
        this.GLYPHICON_GLOBE = "glyphicon-globe";
        this.GLYPHICON_HAND_DOWN = "glyphicon-hand-down";
        this.GLYPHICON_HAND_LEFT = "glyphicon-hand-left";
        this.GLYPHICON_HAND_RIGHT = "glyphicon-hand-right";
        this.GLYPHICON_HAND_UP = "glyphicon-hand-up";
        this.GLYPHICON_HD_VIDEO = "glyphicon-hd-video";
        this.GLYPHICON_HDD = "glyphicon-hdd";
        this.GLYPHICON_HEADER = "glyphicon-header";
        this.GLYPHICON_HEADPHONES = "glyphicon-headphones";
        this.GLYPHICON_HEART = "glyphicon-heart";
        this.GLYPHICON_HEART_EMPTY = "glyphicon-heart-empty";
        this.GLYPHICON_HOME = "glyphicon-home";
        this.GLYPHICON_IMPORT = "glyphicon-import";
        this.GLYPHICON_INBOX = "glyphicon-inbox";
        this.GLYPHICON_INDENT_LEFT = "glyphicon-indent-left";
        this.GLYPHICON_INDENT_RIGHT = "glyphicon-indent-right";
        this.GLYPHICON_INFO_SIGN = "glyphicon-info-sign";
        this.GLYPHICON_ITALIC = "glyphicon-italic";
        this.GLYPHICON_LEAF = "glyphicon-leaf";
        this.GLYPHICON_LINK = "glyphicon-link";
        this.GLYPHICON_LIST = "glyphicon-list";
        this.GLYPHICON_LIST_ALTERNATIVE = "glyphicon-list-alt";
        this.GLYPHICON_LOCK = "glyphicon-lock";
        this.GLYPHICON_LOG_IN = "glyphicon-log-in";
        this.GLYPHICON_LOG_OUT = "glyphicon-log-out";
        this.GLYPHICON_MAGNET = "glyphicon-magnet";
        this.GLYPHICON_MAP_MARKER = "glyphicon-map-marker";
        this.GLYPHICON_MINUS = "glyphicon-minus";
        this.GLYPHICON_MINUS_SIGN = "glyphicon-minus-sign";
        this.GLYPHICON_MOVE = "glyphicon-move";
        this.GLYPHICON_MUSIC = "glyphicon-music";
        this.GLYPHICON_NEW_WINDOW = "glyphicon-new-window";
        this.GLYPHICON_OFF = "glyphicon-off";
        this.GLYPHICON_OK = "glyphicon-ok";
        this.GLYPHICON_OK_CIRCLE = "glyphicon-ok-circle";
        this.GLYPHICON_OK_SIGN = "glyphicon-ok-sign";
        this.GLYPHICON_OPEN = "glyphicon-open";
        this.GLYPHICON_PAPERCLIP = "glyphicon-paperclip";
        this.GLYPHICON_PAUSE = "glyphicon-pause";
        this.GLYPHICON_PENCIL = "glyphicon-pencil";
        this.GLYPHICON_PHONE = "glyphicon-phone";
        this.GLYPHICON_PHONE_ALTERNATIVE = "glyphicon-phone-alt";
        this.GLYPHICON_PICTURE = "glyphicon-picture";
        this.GLYPHICON_PLANE = "glyphicon-plane";
        this.GLYPHICON_PLAY = "glyphicon-play";
        this.GLYPHICON_PLAY_CIRCLE = "glyphicon-play-circle";
        this.GLYPHICON_PLUS = "glyphicon-plus";
        this.GLYPHICON_PLUS_SIGN = "glyphicon-plus-sign";
        this.GLYPHICON_PRINT = "glyphicon-print";
        this.GLYPHICON_PUSHPIN = "glyphicon-pushpin";
        this.GLYPHICON_QRCODE = "glyphicon-qrcode";
        this.GLYPHICON_QUESTION_SIGN = "glyphicon-question-sign";
        this.GLYPHICON_RANDOM = "glyphicon-random";
        this.GLYPHICON_RECORD = "glyphicon-record";
        this.GLYPHICON_REFRESH = "glyphicon-refresh";
        this.GLYPHICON_REGISTRATION_MARK = "glyphicon-registration-mark";
        this.GLYPHICON_REMOVE = "glyphicon-remove";
        this.GLYPHICON_REMOVE_CIRCLE = "glyphicon-remove-circle";
        this.GLYPHICON_REMOVE_SIGN = "glyphicon-remove-sign";
        this.GLYPHICON_REPEAT = "glyphicon-repeat";
        this.GLYPHICON_RESIZE_FULL = "glyphicon-resize-full";
        this.GLYPHICON_RESIZE_HORIZONTAL = "glyphicon-resize-horizontal";
        this.GLYPHICON_RESIZE_SMALL = "glyphicon-resize-small";
        this.GLYPHICON_RESIZE_VERTICAL = "glyphicon-resize-vertical";
        this.GLYPHICON_RETWEET = "glyphicon-retweet";
        this.GLYPHICON_ROAD = "glyphicon-road";
        this.GLYPHICON_SAVE = "glyphicon-save";
        this.GLYPHICON_SAVED = "glyphicon-saved";
        this.GLYPHICON_SCREENSHOT = "glyphicon-screenshot";
        this.GLYPHICON_SD_VIDEO = "glyphicon-sd-video";
        this.GLYPHICON_SEARCH = "glyphicon-search";
        this.GLYPHICON_SEND = "glyphicon-send";
        this.GLYPHICON_SHARE = "glyphicon-share";
        this.GLYPHICON_SHARE_ALTERNATIVE = "glyphicon-share-alt";
        this.GLYPHICON_SHOPPING_CART = "glyphicon-shopping-cart";
        this.GLYPHICON_SIGNAL = "glyphicon-signal";
        this.GLYPHICON_SORT = "glyphicon-sort";
        this.GLYPHICON_SORT_BY_ALPHABET = "glyphicon-sort-by-alphabet";
        this.GLYPHICON_SORT_BY_ALPHABET_ALTERNATIVE = "glyphicon-sort-by-alphabet-alt";
        this.GLYPHICON_SORT_BY_ATTRIBUTES = "glyphicon-sort-by-attributes";
        this.GLYPHICON_SORT_BY_ATTRIBUTES_ALTERNATIVE = "glyphicon-sort-by-attributes-alt";
        this.GLYPHICON_SORT_BY_ORDER = "glyphicon-sort-by-order";
        this.GLYPHICON_SORT_BY_ORDER_ALTERNATIVE = "glyphicon-sort-by-order-alt";
        this.GLYPHICON_SOUND_5_1 = "glyphicon-sound-5-1";
        this.GLYPHICON_SOUND_6_1 = "glyphicon-sound-6-1";
        this.GLYPHICON_SOUND_7_1 = "glyphicon-sound-7-1";
        this.GLYPHICON_SOUND_DOLBY = "glyphicon-sound-dolby";
        this.GLYPHICON_SOUND_STEREO = "glyphicon-sound-stereo";
        this.GLYPHICON_STAR = "glyphicon-star";
        this.GLYPHICON_STAR_EMPTY = "glyphicon-star-empty";
        this.GLYPHICON_STATS = "glyphicon-stats";
        this.GLYPHICON_STEP_BACKWARD = "glyphicon-step-backward";
        this.GLYPHICON_STEP_FORWARD = "glyphicon-step-forward";
        this.GLYPHICON_STOP = "glyphicon-stop";
        this.GLYPHICON_SUBTITLES = "glyphicon-subtitles";
        this.GLYPHICON_TAG = "glyphicon-tag";
        this.GLYPHICON_TAGS = "glyphicon-tags";
        this.GLYPHICON_TASKS = "glyphicon-tasks";
        this.GLYPHICON_TEXT_HEIGHT = "glyphicon-text-height";
        this.GLYPHICON_TEXT_WIDTH = "glyphicon-text-width";
        this.GLYPHICON_TH = "glyphicon-th";
        this.GLYPHICON_TH_LARGE = "glyphicon-th-large";
        this.GLYPHICON_TH_LIST = "glyphicon-th-list";
        this.GLYPHICON_THUMBS_DOWN = "glyphicon-thumbs-down";
        this.GLYPHICON_THUMBS_UP = "glyphicon-thumbs-up";
        this.GLYPHICON_TIME = "glyphicon-time";
        this.GLYPHICON_TINT = "glyphicon-tint";
        this.GLYPHICON_TOWER = "glyphicon-tower";
        this.GLYPHICON_TRANSFER = "glyphicon-transfer";
        this.GLYPHICON_TRASH = "glyphicon-trash";
        this.GLYPHICON_TREE_CONIFER = "glyphicon-tree-conifer";
        this.GLYPHICON_TREE_DECIDUOUS = "glyphicon-tree-deciduous";
        this.GLYPHICON_UNCHECKED = "glyphicon-unchecked";
        this.GLYPHICON_UPLOAD = "glyphicon-upload";
        this.GLYPHICON_USD = "glyphicon-usd";
        this.GLYPHICON_USER = "glyphicon-user";
        this.GLYPHICON_VOLUME_DOWN = "glyphicon-volume-down";
        this.GLYPHICON_VOLUME_OFF = "glyphicon-volume-off";
        this.GLYPHICON_VOLUME_UP = "glyphicon-volume-up";
        this.GLYPHICON_WARNING_SIGN = "glyphicon-warning-sign";
        this.GLYPHICON_WRENCH = "glyphicon-wrench";
        this.GLYPHICON_ZOOM_IN = "glyphicon-zoom-in";
        this.GLYPHICON_ZOOM_OUT = "glyphicon-zoom-out";
    }

})();
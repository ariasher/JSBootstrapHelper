let $b3 = undefined;
let $b4 = undefined;
let $glyphicon = undefined;

(() => {
    $b3 = new Bootstrap3();
    $b4 = new Bootstrap4();
    $glyphicon = new Glyphicon();

    function Bootstrap3() {
        this.AFFIX = "affix";
        this.BADGE = "badge";
        this.BREADCRUMB = "breadcrumb";
        this.CLEARFIX = "clearfix";
        this.COLLAPSE = "collapse";
        this.COLLAPSING = "collapsing"
        
        this.JUMBOTRON = "jumbotron";
        this.PAGE_HEADER = "page-header";
        this.PRE_SCROLLABLE = "pre-scrollable";
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
            BUTTON_WARNING: "btn-warning"
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
            FORM_INLINE:"form-inline",
            HAS_FEEDBACK:"has-feedback",
            HELP_BLOCK: "help-block",
            INPUT_LARGE: "input-lg",
            INPUT_SMALL: "input-sm"
        };

        this.Grid = {
            CONTAINER : "container",
            CONTAINER_FLUID : "container-fluid",
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
                    XS9 :"col-xs-offset-9",
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
                    XS11:"col-xs-pull-11",
                    XS12: "col-xs-pull-12"
                },

                Push: {
                    XS0: "col-xs-push-0",
                    XS1:"col-xs-push-1",
                    XS2:"col-xs-push-2",
                    XS3:"col-xs-push-3",
                    XS4:"col-xs-push-4",
                    XS5:"col-xs-push-5",
                    XS6:"col-xs-push-6",
                    XS7:"col-xs-push-7",
                    XS8:"col-xs-push-8",
                    XS9:"col-xs-push-9",
                    XS10:"col-xs-push-10",
                    XS11:"col-xs-push-11",
                    XS12:"col-xs-push-12"
                }
            },

            LargeColumns : {
                Columns : {
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
                    LG0:"col-lg-offset-0",
                    LG1:"col-lg-offset-1",
                    LG2:"col-lg-offset-2",
                    LG3:"col-lg-offset-3",
                    LG4:"col-lg-offset-4",
                    LG5:"col-lg-offset-5",
                    LG6:"col-lg-offset-6",
                    LG7:"col-lg-offset-7",
                    LG8:"col-lg-offset-8",
                    LG9:"col-lg-offset-9",
                    LG10:"col-lg-offset-10",
                    LG11:"col-lg-offset-11",
                    LG12:"col-lg-offset-12"
                },

                Pull: {
                    LG0:"col-lg-pull-0",
                    LG1:"col-lg-pull-1",
                    LG2:"col-lg-pull-2",
                    LG3:"col-lg-pull-3",
                    LG4:"col-lg-pull-4",
                    LG5:"col-lg-pull-5",
                    LG6:"col-lg-pull-6",
                    LG7:"col-lg-pull-7",
                    LG8:"col-lg-pull-8",
                    LG9:"col-lg-pull-9",
                    LG10:"col-lg-pull-10",
                    LG11:"col-lg-pull-11",
                    LG12:"col-lg-pull-12"
                },

                Push: {
                    LG0:"col-lg-push-0",
                    LG1:"col-lg-push-1",
                    LG2:"col-lg-push-2",
                    LG3:"col-lg-push-3",
                    LG4:"col-lg-push-4",
                    LG5:"col-lg-push-5",
                    LG6:"col-lg-push-6",
                    LG7:"col-lg-push-7",
                    LG8:"col-lg-push-8",
                    LG9:"col-lg-push-9",
                    LG10:"col-lg-push-10",
                    LG11:"col-lg-push-11",
                    LG12:"col-lg-push-12"
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
                    MD0:"col-md-offset-0",
                    MD1:"col-md-offset-1",
                    MD2:"col-md-offset-2",
                    MD3:"col-md-offset-3",
                    MD4:"col-md-offset-4",
                    MD5:"col-md-offset-5",
                    MD6:"col-md-offset-6",
                    MD7:"col-md-offset-7",
                    MD8:"col-md-offset-8",
                    MD9:"col-md-offset-9",
                    MD10:"col-md-offset-10",
                    MD11:"col-md-offset-11",
                    MD12:"col-md-offset-12"
                },

                Pull: {
                    MD0:"col-md-pull-0",
                    MD1:"col-md-pull-1",
                    MD2:"col-md-pull-2",
                    MD3:"col-md-pull-3",
                    MD4:"col-md-pull-4",
                    MD5:"col-md-pull-5",
                    MD6:"col-md-pull-6",
                    MD7:"col-md-pull-7",
                    MD8:"col-md-pull-8",
                    MD9:"col-md-pull-9",
                    MD10:"col-md-pull-10",
                    MD11:"col-md-pull-11",
                    MD12:"col-md-pull-12"
                },

                Push: {
                    MD0:"col-md-push-0",
                    MD1:"col-md-push-1",
                    MD2:"col-md-push-2",
                    MD3:"col-md-push-3",
                    MD4:"col-md-push-4",
                    MD5:"col-md-push-5",
                    MD6:"col-md-push-6",
                    MD7:"col-md-push-7",
                    MD8:"col-md-push-8",
                    MD9:"col-md-push-9",
                    MD10:"col-md-push-10",
                    MD11:"col-md-push-11",
                    MD12:"col-md-push-12"
                }
            },
    
            SmallColumns : {
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
                    SM1:"col-sm-offset-1",
                    SM2:"col-sm-offset-2",
                    SM3:"col-sm-offset-3",
                    SM4:"col-sm-offset-4",
                    SM5:"col-sm-offset-5",
                    SM6:"col-sm-offset-6",
                    SM7:"col-sm-offset-7",
                    SM8:"col-sm-offset-8",
                    SM9:"col-sm-offset-9",
                    SM10:"col-sm-offset-10",
                    SM11:"col-sm-offset-11",
                    SM12:"col-sm-offset-12"                    
                },

                Pull: {
                    SM0:"col-sm-pull-0",
                    SM1:"col-sm-pull-1",
                    SM2:"col-sm-pull-2",
                    SM3:"col-sm-pull-3",
                    SM4:"col-sm-pull-4",
                    SM5:"col-sm-pull-5",
                    SM6:"col-sm-pull-6",
                    SM7:"col-sm-pull-7",
                    SM8:"col-sm-pull-8",
                    SM9:"col-sm-pull-9",
                    SM10:"col-sm-pull-10",
                    SM11:"col-sm-pull-11",
                    SM12:"col-sm-pull-12"
                },

                Push : {
                    SM0 : "col-sm-push-0",
                    SM1 : "col-sm-push-1",
                    SM2: "col-sm-push-2",
                    SM3: "col-sm-push-3",
                    SM4: "col-sm-push-4",
                    SM5: "col-sm-push-5",
                    SM6: "col-sm-push-6",
                    SM7: "col-sm-push-7",
                    SM8: "col-sm-push-8",
                    SM9 :"col-sm-push-9",
                    SM10: "col-sm-push-10",
                    SM11: "col-sm-push-11",
                    SM12: "col-sm-push-12"
                }
            }
        };

        this.Helper = {

            CENTER_BLOCK: "center-block",
            CLEARFIX: "clearfix",
            CLOSE: "close",
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
                BACKGROUND_WARNING:"bg-warning"
            },
            
            Hidden: {
                HIDDEN: "hidden",
                HIDDEN_EXTRA_SMALL: "hidden-xs",
                HIDDEN_LARGE: "hidden-lg",
                HIDDEN_MEDIUM: "hidden-md",
                HIDDEN_PRINT: "hidden-print",
                HIDDEN_SMALL: "hidden-sm",
                HIDE: "hide",
                INVISIBLE: "invisible"
            }

            





// pre-scrollable
// visible-print-block
// visible-print-inline
// visible-print-inline-block
        }

        this.Images = {
            IMAGE_CIRCLE: "img-circle",
            IMAGE_RESPONSIVE: "img-responsive",
            IMAGE_ROUNDED: "img-rounded",
            IMAGE_THUMBNAIL: "img-thumbnail"
        };

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
        //TODO
    }

    function Glyphicon() {
        this.Glyphicon = {
            GLYPHICON: "glyphicon",
            GLYPHICON_ADJUST: "glyphicon-adjust",
            GLYPHICON_ALIGN_CENTER: "glyphicon-align-center",
            GLYPHICON_ALIGN_JUSTIFY: "glyphicon-align-justify",
            GLYPHICON_ALIGN_LEFT: "glyphicon-align-left",
            GLYPHICON_ALIGN_RIGHT: "glyphicon-align-right",
            GLYPHICON_ARROW_DOWN: "glyphicon-arrow-down",
            GLYPHICON_ARROW_LEFT: "glyphicon-arrow-left",
            GLYPHICON_ARROW_RIGHT: "glyphicon-arrow-right",
            GLYPHICON_ARROW_UP: "glyphicon-arrow-up",
            GLYPHICON_ASTERISK: "glyphicon-asterisk",
            GLYPHICON_BACKWARD: "glyphicon-backward",
            GLYPHICON_BAN_CIRCLE: "glyphicon-ban-circle",
            GLYPHICON_BARCODE: "glyphicon-barcode",
            GLYPHICON_BELL: "glyphicon-bell",
            GLYPHICON_BOLD: "glyphicon-bold",
            GLYPHICON_BOOK: "glyphicon-book",
            GLYPHICON_BOOKMARK: "glyphicon-bookmark",
            GLYPHICON_BRIEFCASE: "glyphicon-briefcase",
            GLYPHICON_BULLHORN: "glyphicon-bullhorn",
            GLYPHICON_CALENDAR: "glyphicon-calendar",
            GLYPHICON_CAMERA: "glyphicon-camera",
            GLYPHICON_CERTIFICATE: "glyphicon-certificate",
            GLYPHICON_CHECK: "glyphicon-check",
            GLYPHICON_CHEVRON_DOWN: "glyphicon-chevron-down",
            GLYPHICON_CHEVRON_LEFT: "glyphicon-chevron-left",
            GLYPHICON_CHEVRON_RIGHT: "glyphicon-chevron-right",
            GLYPHICON_CHEVRON_UP: "glyphicon-chevron-up",
            GLYPHICON_CIRCLE_ARROW_DOWN: "glyphicon-circle-arrow-down",
            GLYPHICON_CIRCLE_ARROW_LEFT: "glyphicon-circle-arrow-left",
            GLYPHICON_CIRCLE_ARROW_RIGHT: "glyphicon-circle-arrow-right",
            GLYPHICON_CIRCLE_ARROW_UP: "glyphicon-circle-arrow-up",
            GLYPHICON_CLOUD: "glyphicon-cloud",
            GLYPHICON_CLOUD_DOWNLOAD: "glyphicon-cloud-download",
            GLYPHICON_CLOUD_UPLOAD: "glyphicon-cloud-upload",
            GLYPHICON_COG: "glyphicon-cog",
            GLYPHICON_COLLAPSE_DOWN: "glyphicon-collapse-down",
            GLYPHICON_COLLAPSE_UP: "glyphicon-collapse-up",
            GLYPHICON_COMMENT: "glyphicon-comment",
            GLYPHICON_COMPRESSED: "glyphicon-compressed",
            GLYPHICON_COPYRIGHT_MARK: "glyphicon-copyright-mark",
            GLYPHICON_CREDIT_CARD: "glyphicon-credit-card",
            GLYPHICON_CUTLERY: "glyphicon-cutlery",
            GLYPHICON_DASHBOARD: "glyphicon-dashboard",
            GLYPHICON_DOWNLOAD: "glyphicon-download",
            GLYPHICON_DOWNLOAD_ALTERNATIVE: "glyphicon-download-alt",
            GLYPHICON_EARPHONE: "glyphicon-earphone",
            GLYPHICON_EDIT: "glyphicon-edit",
            GLYPHICON_EJECT: "glyphicon-eject",
            GLYPHICON_ENVELOPE: "glyphicon-envelope",
            GLYPHICON_EURO: "glyphicon-euro",
            GLYPHICON_EXCLAMATION_SIGN: "glyphicon-exclamation-sign",
            GLYPHICON_EXPAND: "glyphicon-expand",
            GLYPHICON_EXPORT: "glyphicon-export",
            GLYPHICON_EYE_CLOSE: "glyphicon-eye-close",
            GLYPHICON_EYE_OPEN: "glyphicon-eye-open",
            GLYPHICON_FACETIME_VIDEO: "glyphicon-facetime-video",
            GLYPHICON_FAST_BACKWARD: "glyphicon-fast-backward",
            GLYPHICON_FAST_FORWARD: "glyphicon-fast-forward",
            GLYPHICON_FILE: "glyphicon-file",
            GLYPHICON_FILM: "glyphicon-film",
            GLYPHICON_FILTER: "glyphicon-filter",
            GLYPHICON_FIRE: "glyphicon-fire",
            GLYPHICON_FLAG: "glyphicon-flag",
            GLYPHICON_FLASH: "glyphicon-flash",
            GLYPHICON_FLOPPY_DISK: "glyphicon-floppy-disk",
            GLYPHICON_FLOPPY_OPEN: "glyphicon-floppy-open",
            GLYPHICON_FLOPPY_REMOVE: "glyphicon-floppy-remove",
            GLYPHICON_FLOPPY_SAVE: "glyphicon-floppy-save",
            GLYPHICON_FLOPPY_SAVED: "glyphicon-floppy-saved",
            GLYPHICON_FOLDER_CLOSE: "glyphicon-folder-close",
            GLYPHICON_FOLDER_OPEN: "glyphicon-folder-open",
            GLYPHICON_FONT: "glyphicon-font",
            GLYPHICON_FORWARD: "glyphicon-forward",
            GLYPHICON_FULLSCREEN: "glyphicon-fullscreen",
            GLYPHICON_GBP: "glyphicon-gbp",
            GLYPHICON_GIFT: "glyphicon-gift",
            GLYPHICON_GLASS: "glyphicon-glass",
            GLYPHICON_GLOBE: "glyphicon-globe",
            GLYPHICON_HAND_DOWN: "glyphicon-hand-down",
            GLYPHICON_HAND_LEFT: "glyphicon-hand-left",
            GLYPHICON_HAND_RIGHT: "glyphicon-hand-right",
            GLYPHICON_HAND_UP: "glyphicon-hand-up",
            GLYPHICON_HD_VIDEO: "glyphicon-hd-video",
            GLYPHICON_HDD: "glyphicon-hdd",
            GLYPHICON_HEADER: "glyphicon-header",
            GLYPHICON_HEADPHONES: "glyphicon-headphones",
            GLYPHICON_HEART: "glyphicon-heart",
            GLYPHICON_HEART_EMPTY: "glyphicon-heart-empty",
            GLYPHICON_HOME: "glyphicon-home",
            GLYPHICON_IMPORT: "glyphicon-import",
            GLYPHICON_INBOX: "glyphicon-inbox",
            GLYPHICON_INDENT_LEFT: "glyphicon-indent-left",
            GLYPHICON_INDENT_RIGHT: "glyphicon-indent-right",
            GLYPHICON_INFO_SIGN: "glyphicon-info-sign",
            GLYPHICON_ITALIC: "glyphicon-italic",
            GLYPHICON_LEAF: "glyphicon-leaf",
            GLYPHICON_LINK: "glyphicon-link",
            GLYPHICON_LIST: "glyphicon-list",
            GLYPHICON_LIST_ALTERNATIVE: "glyphicon-list-alt",
            GLYPHICON_LOCK: "glyphicon-lock",
            GLYPHICON_LOG_IN: "glyphicon-log-in",
            GLYPHICON_LOG_OUT: "glyphicon-log-out",
            GLYPHICON_MAGNET: "glyphicon-magnet",
            GLYPHICON_MAP_MARKER: "glyphicon-map-marker",
            GLYPHICON_MINUS: "glyphicon-minus",
            GLYPHICON_MINUS_SIGN: "glyphicon-minus-sign",
            GLYPHICON_MOVE: "glyphicon-move",
            GLYPHICON_MUSIC: "glyphicon-music",
            GLYPHICON_NEW_WINDOW: "glyphicon-new-window",
            GLYPHICON_OFF: "glyphicon-off",
            GLYPHICON_OK: "glyphicon-ok",
            GLYPHICON_OK_CIRCLE: "glyphicon-ok-circle",
            GLYPHICON_OK_SIGN: "glyphicon-ok-sign",
            GLYPHICON_OPEN: "glyphicon-open",
            GLYPHICON_PAPERCLIP: "glyphicon-paperclip",
            GLYPHICON_PAUSE: "glyphicon-pause",
            GLYPHICON_PENCIL: "glyphicon-pencil",
            GLYPHICON_PHONE: "glyphicon-phone",
            GLYPHICON_PHONE_ALTERNATIVE: "glyphicon-phone-alt",
            GLYPHICON_PICTURE: "glyphicon-picture",
            GLYPHICON_PLANE: "glyphicon-plane",
            GLYPHICON_PLAY: "glyphicon-play",
            GLYPHICON_PLAY_CIRCLE: "glyphicon-play-circle",
            GLYPHICON_PLUS: "glyphicon-plus",
            GLYPHICON_PLUS_SIGN: "glyphicon-plus-sign",
            GLYPHICON_PRINT: "glyphicon-print",
            GLYPHICON_PUSHPIN: "glyphicon-pushpin",
            GLYPHICON_QRCODE: "glyphicon-qrcode",
            GLYPHICON_QUESTION_SIGN: "glyphicon-question-sign",
            GLYPHICON_RANDOM: "glyphicon-random",
            GLYPHICON_RECORD: "glyphicon-record",
            GLYPHICON_REFRESH: "glyphicon-refresh",
            GLYPHICON_REGISTRATION_MARK: "glyphicon-registration-mark",
            GLYPHICON_REMOVE: "glyphicon-remove",
            GLYPHICON_REMOVE_CIRCLE: "glyphicon-remove-circle",
            GLYPHICON_REMOVE_SIGN: "glyphicon-remove-sign",
            GLYPHICON_REPEAT: "glyphicon-repeat",
            GLYPHICON_RESIZE_FULL: "glyphicon-resize-full",
            GLYPHICON_RESIZE_HORIZONTAL: "glyphicon-resize-horizontal",
            GLYPHICON_RESIZE_SMALL: "glyphicon-resize-small",
            GLYPHICON_RESIZE_VERTICAL: "glyphicon-resize-vertical",
            GLYPHICON_RETWEET: "glyphicon-retweet",
            GLYPHICON_ROAD: "glyphicon-road",
            GLYPHICON_SAVE: "glyphicon-save",
            GLYPHICON_SAVED: "glyphicon-saved",
            GLYPHICON_SCREENSHOT: "glyphicon-screenshot",
            GLYPHICON_SD_VIDEO: "glyphicon-sd-video",
            GLYPHICON_SEARCH: "glyphicon-search",
            GLYPHICON_SEND: "glyphicon-send",
            GLYPHICON_SHARE: "glyphicon-share",
            GLYPHICON_SHARE_ALTERNATIVE: "glyphicon-share-alt",
            GLYPHICON_SHOPPING_CART: "glyphicon-shopping-cart",
            GLYPHICON_SIGNAL: "glyphicon-signal",
            GLYPHICON_SORT: "glyphicon-sort",
            GLYPHICON_SORT_BY_ALPHABET: "glyphicon-sort-by-alphabet",
            GLYPHICON_SORT_BY_ALPHABET_ALTERNATIVE: "glyphicon-sort-by-alphabet-alt",
            GLYPHICON_SORT_BY_ATTRIBUTES:"glyphicon-sort-by-attributes",
            GLYPHICON_SORT_BY_ATTRIBUTES_ALTERNATIVE: "glyphicon-sort-by-attributes-alt",
            GLYPHICON_SORT_BY_ORDER: "glyphicon-sort-by-order",
            GLYPHICON_SORT_BY_ORDER_ALTERNATIVE: "glyphicon-sort-by-order-alt",
            GLYPHICON_SOUND_5_1: "glyphicon-sound-5-1",
            GLYPHICON_SOUND_6_1: "glyphicon-sound-6-1",
            GLYPHICON_SOUND_7_1: "glyphicon-sound-7-1",
            GLYPHICON_SOUND_DOLBY: "glyphicon-sound-dolby",
            GLYPHICON_SOUND_STEREO: "glyphicon-sound-stereo",
            GLYPHICON_STAR: "glyphicon-star",
            GLYPHICON_STAR_EMPTY: "glyphicon-star-empty",
            GLYPHICON_STATS: "glyphicon-stats",
            GLYPHICON_STEP_BACKWARD: "glyphicon-step-backward",
            GLYPHICON_STEP_FORWARD: "glyphicon-step-forward",
            GLYPHICON_STOP: "glyphicon-stop",
            GLYPHICON_SUBTITLES: "glyphicon-subtitles",
            GLYPHICON_TAG: "glyphicon-tag",
            GLYPHICON_TAGS: "glyphicon-tags",
            GLYPHICON_TASKS: "glyphicon-tasks",
            GLYPHICON_TEXT_HEIGHT: "glyphicon-text-height",
            GLYPHICON_TEXT_WIDTH: "glyphicon-text-width",
            GLYPHICON_TH: "glyphicon-th",
            GLYPHICON_TH_LARGE: "glyphicon-th-large",
            GLYPHICON_TH_LIST: "glyphicon-th-list",
            GLYPHICON_THUMBS_DOWN: "glyphicon-thumbs-down",
            GLYPHICON_THUMBS_UP: "glyphicon-thumbs-up",
            GLYPHICON_TIME: "glyphicon-time",
            GLYPHICON_TINT: "glyphicon-tint",
            GLYPHICON_TOWER: "glyphicon-tower",
            GLYPHICON_TRANSFER: "glyphicon-transfer",
            GLYPHICON_TRASH: "glyphicon-trash",
            GLYPHICON_TREE_CONIFER: "glyphicon-tree-conifer",
            GLYPHICON_TREE_DECIDUOUS: "glyphicon-tree-deciduous",
            GLYPHICON_UNCHECKED: "glyphicon-unchecked",
            GLYPHICON_UPLOAD: "glyphicon-upload",
            GLYPHICON_USD: "glyphicon-usd",
            GLYPHICON_USER: "glyphicon-user",
            GLYPHICON_VOLUME_DOWN: "glyphicon-volume-down",
            GLYPHICON_VOLUME_OFF: "glyphicon-volume-off",
            GLYPHICON_VOLUME_UP: "glyphicon-volume-up",
            GLYPHICON_WARNING_SIGN: "glyphicon-warning-sign",
            GLYPHICON_WRENCH: "glyphicon-wrench",
            GLYPHICON_ZOOM_IN: "glyphicon-zoom-in",
            GLYPHICON_ZOOM_OUT: "glyphicon-zoom-out"
        };
    }

})();


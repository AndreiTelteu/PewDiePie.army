import YouTube from "simple-youtube-api";
import AppConfig from "./config";

const live = {
    youtubeApi: null,
    test: false,

    subGap: 0,
    channels: {
        PewDiePie: {
            subs: 0,
            views: 0,
            config: AppConfig.PewDiePie
        },
        TSeries: {
            subs: 0,
            views: 0,
            config: AppConfig.TSeries
        }
    },

    start(test = null) {
        if (test !== null) this.test = test;
        // this.youtubeApi = new YouTube(AppConfig.APIKey);

        // The king ! PewDiePie
        this.startInterval(this.channels.PewDiePie);

        // the villain?
        this.startInterval(this.channels.TSeries);
    },

    startInterval(channel) {
        this.refreshSub(channel);
        channel.interval = setInterval(() => {
            this.refreshSub(channel);
        }, channel.config.interval);
    },

    refreshSub(Channel) {
        if (this.test) {
            this.refreshSubFake();
            return;
        }
        if (this.youtubeApi == null) {
            this.refreshSubSocialBlade(Channel);
            return;
        }
        this.youtubeApi
            .getChannelByID(Channel.config.ChannelID, {
                part: ["statistics"]
            })
            .then(ChannelResult => {
                Channel.subs = ChannelResult.subscriberCount;
                Channel.views = ChannelResult.viewCount;
                live.refreshSubGap();
            })
            .catch(error => {
                console.log(error.message);
            });
    },
    refreshSubFake(Channel) {
        Channel.subs += Math.floor(Math.random() * 100) + 1;
        this.refreshSubGap();
    },
    refreshSubSocialBlade(Channel) {
        console.log(Channel);
        fetch("https://pewdiepie.army/api.php?id=" + Channel.config.ChannelID, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(result => {
                console.log(result);
                if (!result && !result.items && result.items.length == 0)
                    return;
                Channel.subs = result.items[0].statistics.subscriberCount;
                Channel.views = result.items[0].statistics.viewCount;
                live.refreshSubGap();
            })
            .catch(error => {
                console.log(error);
            });
        this.refreshSubGap();
    },

    refreshSubGap() {
        this.subGap = Math.abs(
            this.channels.PewDiePie.subs - this.channels.TSeries.subs
        );
    }
};
export default live;

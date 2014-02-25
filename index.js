'use strict';

var generateFeedXml = function (content, options) {
    var RSS = require('rss'),
        feedOptions = {
            title: options.rss.title,
            description: options.rss.description,
            feed_url: options.rss.feedUrl,
            site_url: options.rss.baseUrl,
            image_url: options.rss.faviconUrl,
            author: options.rss.author,
            managingEditor: options.rss.author,
            webMaster: options.rss.author,
            copyright: options.rss.copyright,
            language: options.rss.language,
            categories: content.tags,
            pubDate: content.lastChange,
            ttl: options.rss.ttl
        },
        rss = new RSS(feedOptions);

    content.entries.forEach(function (item) {
        rss.item({
            title: item.longTitle,
            url: item.url,
            description: item.content,
            guid: item.id,
            categories: item.tagNames,
            date: item.date,
            author: options.rss.author
        });
    });

    return rss.xml('\t');
};

exports.init = function (engine) {
    engine.getRssXml = function (callback) {
        var items = engine.entries.all.orderedByDate();

        engine.entries.load(items, function () {
            var xml = generateFeedXml({
                    lastChange: engine.entry.latest() ? engine.entry.latest().date : null,
                    entries: items,
                    tags: engine.tags.asNames()
                }, engine.getOptions());

            callback(xml);
        });
    };
};
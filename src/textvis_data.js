const json_url = 'https://textvis.lnu.se/data/content.json'
export let textvis = [
	{
		"id": "Robertson1993",
		"title": "Document Lens",
		"year": 1993,
		"authors": "George G. Robertson and Jock D. Mackinlay",
		"reference": "George G. Robertson and Jock D. Mackinlay. <i>The Document Lens</i>. Proceedings of the Annual ACM symposium on User Interface Software and Technology (UIST), pp. 101-108, 1993.",
		"url": "https://doi.org/10.1145/168642.168652",
		"categories": ["overview", "navigation", "3d", "document", "text"]
	},

	{
		"id": "Eick1992",
		"title": "Seesoft",
		"year": 1992,
		"authors": "Stephen G. Eick, Joseph L. Steffen, and Eric E. Sumner",
		"reference": "Stephen G. Eick, Joseph L. Steffen, and Eric E. Sumner. <i>Seesoft - A Tool for Visualizing Line Oriented Software Statistics</i>. IEEE Transactions on Software Engineering, vol. 18, no. 11, pp. 957-968, 1992.",
		"url": "https://doi.org/10.1109/32.177365",
		"categories": ["overview", "corpora", "document", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Oelke2007",
		"title": "Literature Fingerprinting",
		"year": 2007,
		"authors": "Daniel A. Keim and Daniela Oelke",
		"reference": "Daniel A. Keim and Daniela Oelke. <i>Literature Fingerprinting: A New Method for Visual Literary Analysis</i>. Proceedings of the IEEE Symposium on Visual Analytics and Technology (VAST), pp. 115-122, 2007.",
		"url": "https://doi.org/10.1109/VAST.2007.4389004",
		"categories": ["text-summarization", "comparison", "overview", "corpora", "document", "literature", "2d", "pixel-area", "metric"]
	},

	{
		"id": "Wattenberg2008",
		"title": "Word Tree",
		"year": 2008,
		"authors": "Martin Wattenberg and Fernanda B. Viégas",
		"reference": "Martin Wattenberg and Fernanda B. Viégas. <i>The Word Tree, an Interactive Visual Concordance</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 14, no. 6, pp. 1221-1228, 2008.",
		"url": "https://doi.org/10.1109/TVCG.2008.172",
		"categories": ["lexical-analysis", "roi", "document", "networks", "literature", "2d", "node-link", "metric"]
	},

	{
		"id": "AbdulRahman2013",
		"title": "Poem Viewer",
		"year": 2013,
		"authors": "Alfie Abdul-Rahman et al.",
		"reference": "Alfie Abdul-Rahman, Julie Lein, Katharine Coles, Eamonn Maguire, Miriah Meyer, Martin Wynne, Chris R. Johnson, Anne Trefethen, and Min Chen. <i>Rule-based Visual Mappings – with a Case Study on Poetry Visualization</i>. Computer Graphics Forum, vol. 32, no. 3pt4, pp. 381–390, 2013.",
		"url": "https://doi.org/10.1111/cgf.12125",
		"categories": ["lexical-analysis", "relation-analysis", "comparison", "navigation", "document", "literature", "2d", "text", "node-link", "glyph", "linear"]
	},

	{
		"id": "Wang2013_1",
		"title": "Sentiment Helix with Attribute Astrolabe",
		"year": 2013,
		"authors": "Changbo Wang et al.",
		"reference": "Changbo Wang, Zhao Xiao, Yuhua Liu, Yanru Xu, Aoying Zhou, and Kang Zhang. <i>SentiView: Sentiment Analysis and Visualization for Internet Popular Topics</i>. IEEE Transactions on Human-Machine Systems, vol. 43, no. 6, pp. 620-630, 2013.",
		"url": "https://doi.org/10.1109/THMS.2013.2285047",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "time-series", "corpora", "social-media", "2d", "line-plot", "clouds", "radial", "linear"]
	},

	{
		"id": "Wang2013_2",
		"title": "Sentiment Relationship Map",
		"year": 2013,
		"authors": "Changbo Wang et al.",
		"reference": "Changbo Wang, Zhao Xiao, Yuhua Liu, Yanru Xu, Aoying Zhou, and Kang Zhang. <i>SentiView: Sentiment Analysis and Visualization for Internet Popular Topics</i>. IEEE Transactions on Human-Machine Systems, vol. 43, no. 6, pp. 620-630, 2013.",
		"url": "https://doi.org/10.1109/THMS.2013.2285047",
		"categories": ["sentiment-analysis", "text-summarization", "relation-analysis", "overview", "comparison", "navigation", "networks", "corpora", "social-media", "2d", "node-link", "metric"]
	},

	{
		"id": "Gambette2010",
		"title": "Tree Cloud",
		"year": 2010,
		"authors": "Philippe Gambette and Jean Véronis",
		"reference": "Philippe Gambette and Jean Véronis. <i>Visualising a Text with a Tree Cloud</i>. Proceedings of the Conference of the International Federation of Classification Societies (IFCS), pp. 561-569, 2010.",
		"url": "https://doi.org/10.1007/978-3-642-10745-0_61",
		"categories": ["text-summarization", "classification", "overview", "document", "networks", "2d", "node-link", "clouds", "metric"]
	},

	{
		"id": "Dou2013",
		"title": "Hierarchical Topics",
		"year": 2013,
		"authors": "Wenwen Dou et al.",
		"reference": "Wenwen Dou, Li Yu, Xiaoyu Wang, Zhiqiang Ma, and William Ribarsky. <i>HierarchicalTopics: Visually Exploring Large Text Collections Using Topic Hierarchies</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 12, pp. 2002-2011, 2013.",
		"url": "https://doi.org/10.1109/TVCG.2013.162",
		"categories": ["text-summarization", "classification", "roi", "corpora", "time-series", "networks", "social-media", "editorial-media", "papers", "2d", "node-link", "line-plot", "metric"]
	},

	{
		"id": "Havre2002",
		"title": "ThemeRiver",
		"year": 2002,
		"authors": "Susan Havre et al.",
		"reference": "Susan Havre, Elizabeth Hetzler, Paul Whitney, and Lucy Nowell. <i>ThemeRiver: Visualizing thematic changes in large document collections</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 8, no. 1, pp. 9-20, 2002.",
		"url": "https://doi.org/10.1109/2945.981848",
		"categories": ["text-summarization", "trend-analysis", "event-analysis", "overview", "roi", "comparison", "corpora", "time-series", "editorial-media", "2d", "line-plot", "metric"]
	},

	{
		"id": "Oelke2013",
		"title": "Fingerprint Matrices",
		"year": 2013,
		"authors": "Daniela Oelke, Dimitrios Kokkinakis, and Daniel A. Keim",
		"reference": "Daniela Oelke, Dimitrios Kokkinakis, and Daniel A. Keim. <i>Fingerprint Matrices: Uncovering the dynamics of social networks in prose literature</i>. Computer Graphics Forum, vol 32, no. 3pt4, pp. 371–380, 2013.",
		"url": "https://doi.org/10.1111/cgf.12124",
		"categories": ["text-summarization", "comparison", "overview", "document", "networks", "literature", "2d", "pixel-area", "metric"]
	},

	{
		"id": "Deller2008",
		"title": "Document Spaces",
		"year": 2008,
		"authors": "Matthias Deller et al.",
		"reference": "Matthias Deller, Stefan Agne, Achim Ebert, Andreas Dengel, Hans Hagen, Bertin Klein, Michael Bender, Tony Bernardin, and Bernd Hamann. <i>Managing a Document-Based Information Space</i>. Proceedings of the International conference on Intelligent User Interfaces (IUI), pp. 119-128, 2008.",
		"url": "https://doi.org/10.1145/1378773.1378789",
		"categories": ["classification","overview","navigation","corpora","3d","pixel-area","metric"]
	},

	{
		"id": "Freeman1996",
		"title": "Lifestreams",
		"year": 1996,
		"authors": "Eric Freeman and David Gelernter",
		"reference": "Eric Freeman and David Gelernter. <i>Lifestreams: A Storage Model for Personal Data</i>. ACM SIGMOD Record, vol. 25, no. 1, pp. 80-86, 1996.",
		"url": "https://doi.org/10.1145/381854.381893",
		"categories": ["navigation","streams","time-series","2d","pixel-area","text","glyph","linear"]
	},

	{
		"id": "Salton1994",
		"title":"Text Theme",
		"year": 1994,
		"authors":"Gerard Salton et al.",
		"reference": "Gerard Salton, James Allan, Chris Buckley, and Amit Singhal. <i>Automatic Analysis, Theme Generation, and Summarization of Machine-Readable Texts</i>. Science, vol. 264, no. 5164, pp. 1421-1426, 1994.",
		"url": "https://doi.org/10.1126/science.264.5164.1421",
		"categories": ["text-summarization","overview","document","2d","node-link","radial"]
	},

	{
		"id": "Lin1992",
		"title": "Document SOM",
		"year": 1992,
		"authors": "Xia Lin",
		"reference": "Xia Lin. <i>Visualization for the Document Space</i>. Proceedings of the IEEE Conference on Visualization (Visualization), pp. 274-281, 1992",
		"url": "https://doi.org/10.1109/VISUAL.1992.235198",
		"categories": ["relation-analysis","classification","2d","corpora","clouds","maps","metric"]
	},

	{
		"id": "Wise1995",
		"title": "ThemeScape",
		"year": 1995,
		"authors": "James A. Wise et al.",
		"reference": "James A. Wise, James J. Thomas, Kelly Pennock, David Lantrip, Marc Pottier, Anne Schur, and Vern Crow. <i>Visualizing the Non-Visual: Spatial Analysis and Interaction with Information from Text Documents</i>. Proceedings of the IEEE Conference on Information Visualization (InfoVis), pp. 51-58, 1995",
		"url": "https://doi.org/10.1109/INFVIS.1995.528686",
		"categories": ["text-summarization","classification","overview","3d","corpora","maps","metric"]
	},

	{
		"id": "Collins2009",
		"title": "Parallel Tag Clouds",
		"year": 2009,
		"authors": "Christopher Collins, Fernanda B. Viégas, and Martin Wattenberg",
		"reference": "Christopher Collins, Fernanda B. Viégas, and Martin Wattenberg. <i>Parallel Tag Clouds to Explore and Analyze Faceted Text Corpora</i>. Proceedings of the IEEE Symposium on Visual Analytics Science and Technology (VAST), pp. 91-98, 2009",
		"url": "https://doi.org/10.1109/VAST.2009.5333443",
		"categories":["lexical-analysis","relation-analysis","comparison","2d","corpora","clouds","linear"]
	},

	{
		"id": "Lee2010",
		"title": "SparkClouds",
		"year": 2010,
		"authors": "Bongshin Lee et al.",
		"reference": "Bongshin Lee, Nathalie Henry Riche, Amy K. Karlson, and Sheelagh Carpendale. <i>SparkClouds: Visualizing Trends in Tag Clouds</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 16, no. 6, pp. 1182-1189, 2010",
		"url": "https://doi.org/10.1109/TVCG.2010.194",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "navigation", "corpora", "2d", "line-plot", "clouds", "text", "linear"]
	},

	{
		"id": "Milgram1976",
		"title": "TagClouds",
		"year": 1976,
		"authors": "Stanley Milgram and Denise Jodelet",
		"reference": "Stanley Milgram and Denise Jodelet. <i>Psychological maps of Paris</i>. Environmental Psychology, 1976",
		"url": "http://www.wordle.net",
		"categories": ["relation-analysis","classification","2d","corpora","clouds","maps","text","metric"]
	},

	{
		"id": "Rennison1994",
		"title": "Galaxy of News",
		"year": 1994,
		"authors": "Earl Rennison",
		"reference": "Earl Rennison. <i>Galaxy of News: An Approach to Visualizing and Understanding Expansive News Landscapes</i>. Proceedings of the 7th annual ACM symposium on User Interface Software and Technology (UIST), pp. 3-12, 1994",
		"url": "https://doi.org/10.1145/192426.192429",
		"categories": ["relation-analysis","overview","comparison","classification","navigation","editorial-media","2d","corpora","node-link","clouds","text","metric"]
	},

	{
		"id": "Krstajic2013",
		"title": "Story Tracker",
		"year": 2013,
		"authors": "Miloš Krstajić et al.",
		"reference": "Miloš Krstajić, Mohammad Najm-Araghi, Florian Mansmann, and Daniel A. Keim. <i>Story Tracker: Incremental visual text analytics of news story development</i>. Information Visualization, vol. 12, no. 3-4, pp. 308-323, 2013.",
		"url": "https://doi.org/10.1177/1473871613493996",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "streams", "time-series", "editorial-media", "2d", "node-link", "linear"]
	},

	{
		"id": "Gansner2013",
		"title": "Dynamic Maps",
		"year": 2013,
		"authors": "Emden R. Gansner, Yifan Hu, and Stephen C. North",
		"reference": "Emden R. Gansner, Yifan Hu, and Stephen C. North. <i>Interactive Visualization of Streaming Text Data with Dynamic Maps</i>. Journal of Graph Algorithms and Applications, vol. 17, no. 4, pp. 515-540, 2013.",
		"url": "https://doi.org/10.7155/jgaa.00302",
		"categories": ["text-summarization", "relation-analysis", "classification", "streams", "networks", "social-media", "2d", "node-link", "maps", "metric"]
	},

	{
		"id": "Zhang2013_1",
		"title": "Electron Cloud Model",
		"year": 2013,
		"authors": "Chenghai Zhang, Yuhua Liu, and Changbo Wang",
		"reference": "Chenghai Zhang, Yuhua Liu, and Changbo Wang. <i>Time-space Varying Visual Analysis of Micro-blog Sentiment</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 64-71, 2013.",
		"url": "https://doi.org/10.1145/2493102.2493110",
		"categories": ["sentiment-analysis", "overview", "corpora", "time-series", "social-media", "2d", "line-plot", "clouds", "radial"]
	},

	{
		"id": "Zhang2013_2",
		"title": "Geographical Layout of Public Sentiment",
		"year": 2013,
		"authors": "Chenghai Zhang, Yuhua Liu, and Changbo Wang",
		"reference": "Chenghai Zhang, Yuhua Liu, and Changbo Wang. <i>Time-space Varying Visual Analysis of Micro-blog Sentiment</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 64-71, 2013.",
		"url": "https://doi.org/10.1145/2493102.2493110",
		"categories": ["sentiment-analysis", "overview", "corpora", "geospatial", "networks", "social-media", "2d", "node-link", "maps", "metric"]
	},

	{
		"id": "Ham2009",
		"title": "Phrase Net",
		"year": 2009,
		"authors": "Frank van Ham, Martin Wattenberg, and Fernanda B. Viégas",
		"reference": "Frank van Ham, Martin Wattenberg, and Fernanda B. Viégas. <i>Mapping Text with Phrase Nets</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1169-1176, 2009.",
		"url": "https://doi.org/10.1109/TVCG.2009.165",
		"categories": ["lexical-analysis", "relation-analysis", "overview", "document", "networks", "literature", "2d", "node-link", "metric"]
	},

	{
		"id": "Cui2012",
		"title": "TextWheel",
		"year": 2012,
		"authors": "Weiwei Cui et al.",
		"reference": "Weiwei Cui, Huamin Qu, Hong Zhou, Wenbin Zhang, and Steve Skiena. <i>Watch the Story Unfold with TextWheel: Visualization of Large-Scale News Streams</i>. ACM Transactions on Intelligent Systems and Technology, vol. 3, no. 2, pp. 20:1-20:17, 2012.",
		"url": "https://doi.org/10.1145/2089094.2089096",
		"categories": ["sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "classification", "monitoring", "roi", "comparison", "navigation", "corpora", "streams", "time-series", "networks", "editorial-media", "2d", "node-link", "line-plot", "glyph", "linear", "radial"]
	},

	{
		"id": "Kaban2002",
		"title": "Topographic Visualisation of Evolving Text",
		"year": 2002,
		"authors": "Ata Kabán and Mark A. Girolami",
		"reference": "Ata Kabán and Mark A. Girolami. <i>A Dynamic Probabilistic Model to Visualise Topic Evolution in Text Streams</i>. Journal of Intelligent Information Systems, vol. 18, no. 2-3, pp. 107-125, 2002.",
		"url": "https://doi.org/10.1023/A:1013673310093",
		"categories": ["text-summarization", "classification", "streams", "time-series", "editorial-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Collins2009_2",
		"title": "Bubble Sets",
		"year": 2009,
		"authors": "Christopher Collins, Gerald Penn, and Sheelagh Carpendale",
		"reference": "Christopher Collins, Gerald Penn, and Sheelagh Carpendale. <i>Bubble Sets: Revealing Set Relations with Isocontours over Existing Visualizations</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1009-1016, 2009.",
		"url": "https://doi.org/10.1109/TVCG.2009.122",
		"categories": ["translation-analysis", "relation-analysis", "classification", "uncertainty", "document", "corpora", "networks", "2d", "pixel-area", "metric"]
	},

	{
		"id": "Collins2009_3",
		"title": "DocuBurst",
		"year": 2009,
		"authors": "Christopher Collins, Sheelagh Carpendale, and Gerald Penn",
		"reference": "Christopher Collins, Sheelagh Carpendale, and Gerald Penn. <i>DocuBurst: Visualizing Document Content using Language Structure</i>. Computer Graphics Forum, vol. 28, no. 3, pp. 1039–1046, 2009.",
		"url": "https://doi.org/10.1111/j.1467-8659.2009.01439.x",
		"categories": ["text-summarization", "relation-analysis", "lexical-analysis", "classification", "overview", "comparison", "navigation", "document", "2d", "pixel-area", "radial"]
	},

	{
		"id": "Paley2002",
		"title": "TextArc",
		"year": 2002,
		"authors": "W. Bradford Paley",
		"reference": "W. Bradford Paley. <i>TextArc: Showing Word Frequency and Distribution in Text</i>. Poster Abstracts of IEEE VIS, pp. 40-41, 2002.",
		"url": "http://www.textarc.org",
		"categories": ["text-summarization", "relation-analysis", "lexical-analysis", "overview", "document", "2d", "clouds", "node-link", "radial"]
	},

	{
		"id": "Strobelt2009",
		"title": "Document Cards",
		"year": 2009,
		"authors": "Hendrik Strobelt et al.",
		"reference": "Hendrik Strobelt, Daniela Oelke, Christian Rohrdantz, Andreas Stoffel, Daniel A. Keim, and Oliver Deussen. <i>Document Cards: A Top Trumps Visualization for Documents</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1145-1152, 2009.",
		"url": "https://doi.org/10.1109/TVCG.2009.139",
		"categories": ["text-summarization", "corpora", "2d", "overview", "metric", "glyph"]
	},

	{
		"id": "Goerg2013",
		"title": "Jigsaw",
		"year": 2013,
		"authors": "Carsten Görg et al.",
		"reference": "Carsten Görg, Zhicheng Liu, Jaeyeon Kihm, Jaegul Choo, Haesun Park, and John Stasko. <i>Combining Computational Analyses and Interactive Visualization for Document Exploration and Sensemaking in Jigsaw</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 10, pp. 1646-1663, 2013.",
		"url": "https://doi.org/10.1109/TVCG.2012.324",
		"categories": ["text-summarization", "relation-analysis", "sentiment-analysis", "classification", "overview", "navigation", "comparison", "corpora", "papers", "reviews", "2d", "pixel-area", "node-link", "text", "clouds", "metric"]
	},

	{
		"id": "Bosch2013",
		"title": "ScatterBlogs2",
		"year": 2013,
		"authors": "Harald Bosch et al.",
		"reference": "Harald Bosch, Dennis Thom, Florian Heimerl, Edwin Püttmann, Steffen Koch, Robert Krüger, Michael Wörner, and Thomas Ertl. <i>ScatterBlogs2: Real-Time Monitoring of Microblog Messages through User-Guided Filtering</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 12, pp. 2022–2031, 2013.",
		"url": "https://doi.org/10.1109/TVCG.2013.186",
		"categories": ["text-summarization", "event-analysis", "overview", "monitoring", "classification", "uncertainty", "streams", "geospatial", "time-series", "social-media", "2d", "node-link", "clouds", "maps", "text", "glyph", "metric"]
	},

	{
		"id": "Luo2012",
		"title": "EventRiver",
		"year": 2012,
		"authors": "Dongning Luo et al.",
		"reference": "Dongning Luo, Jing Yang, Miloš Krstajić, William Ribarsky, and Daniel Keim. <i>EventRiver: Visually Exploring Text Collections with Temporal References</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 1, pp. 93-105, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2010.225",
		"categories": ["text-summarization", "event-analysis", "overview", "navigation", "classification", "comparison", "roi", "corpora", "time-series", "editorial-media", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Chen2006",
		"title": "Conflicting Opinions Visualization",
		"year": 2006,
		"authors": "Chaomei Chen et al.",
		"reference": "Chaomei Chen, Fidelia Ibekwe-SanJuan, Eric SanJuan, and Chris Weaver. <i>Visual Analysis of Conflicting Opinions</i>. Proceedings of the IEEE Symposium on Visual Analytics Science and Technology (VAST), pp. 59-66, 2006.",
		"url": "https://doi.org/10.1109/VAST.2006.261431",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "lexical-analysis", "overview", "comparison", "navigation", "classification", "corpora", "time-series", "networks", "reviews", "2d", "line-plot", "node-link", "linear", "metric"]
	},

	{
		"id": "Mao2007",
		"title": "Sequential Document Visualization",
		"year": 2007,
		"authors": "Yi Mao, Joshua V. Dillon, and Guy Lebanon",
		"reference": "Yi Mao, Joshua V. Dillon, and Guy Lebanon. <i>Sequential Document Visualization</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 13, no. 6, pp. 1208-1215, 2007.",
		"url": "https://doi.org/10.1109/TVCG.2007.70592",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "comparison", "document", "corpora", "time-series", "2d", "line-plot", "metric"]
	},

	{
		"id": "Brew2011",
		"title": "SentireCrowds",
		"year": 2011,
		"authors": "Anthony Brew et al.",
		"reference": "Anthony Brew, Derek Greene, Daniel Archambault, and Pádraig Cunningham. <i>Deriving Insights from National Happiness Indices</i>. Proceedings of the IEEE International Conference on Data Mining Workshops (ICDMW), pp. 53-60, 2011.",
		"url": "https://doi.org/10.1109/ICDMW.2011.61",
		"categories": ["sentiment-analysis", "text-summarization", "overview", "comparison", "classification", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "metric"]
	},

	{
		"id": "Stoffel2012",
		"title": "Distorted Document Thumbnails",
		"year": 2012,
		"authors": "Andreas Stoffel et al.",
		"reference": "Andreas Stoffel, Hendrik Strobelt, Oliver Deussen, and Daniel A. Keim. <i>Document Thumbnails with Variable Text Scaling</i>. Computer Graphics Forum, vol. 31, no. 3pt3, pp. 1165–1173, 2012.",
		"url": "https://doi.org/10.1111/j.1467-8659.2012.03109.x",
		"categories": ["overview", "roi", "document", "2d", "text"]
	},

	{
		"id": "Riehmann2012",
		"title": "Wordgraph",
		"year": 2012,
		"authors": "Patrick Riehmann et al.",
		"reference": "Patrick Riehmann, Henning Gruendl, Martin Potthast, Martin Trenkmann, Benno Stein, and Bernd Froehlich. <i>WORDGRAPH: Keyword-in-Context Visualization for NETSPEAK's Wildcard Search</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 9, pp. 1411-1423, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2012.96",
		"categories": ["relation-analysis", "comparison", "navigation", "document", "networks", "literature", "2d", "node-link", "metric"]
	},

	{
		"id": "Paulovich2012",
		"title": "ProjCloud",
		"year": 2012,
		"authors": "Fernando V. Paulovich et al.",
		"reference": "Fernando V. Paulovich, Franklina M. B. Toledo, Guilherme P. Telles, Rosane Minghim, and Luis Gustavo Nonato. <i>Semantic Wordification of Document Collections</i>. Computer Graphics Forum, vol. 31, no. 3pt3, pp. 1145–1153, 2012.",
		"url": "https://doi.org/10.1111/j.1467-8659.2012.03107.x",
		"categories": ["text-summarization", "relation-analysis", "overview", "corpora", "2d", "pixel-area", "maps", "clouds", "text", "metric"]
	},

	{
		"id": "Wattenberg2002",
		"title": "Arc Diagram",
		"year": 2002,
		"authors": "Martin Wattenberg",
		"reference": "Martin Wattenberg. <i>Arc diagrams: visualizing structure in strings</i>. Proceedings of IEEE Symposium on Information Visualization (INFOVIS), pp. 110-116, 2002.",
		"url": "https://doi.org/10.1109/INFVIS.2002.1173155",
		"categories": ["trend-analysis", "relation-analysis", "comparison", "overview", "document", "2d", "node-link", "linear"]
	},

	{
		"id": "Wanner2012",
		"title": "Topic Tracker",
		"year": 2012,
		"authors": "Franz Wanner, Andreas Weiler, and Tobias Schreck",
		"reference": "Franz Wanner, Andreas Weiler, and Tobias Schreck. <i>Topic Tracker: Shape-based Visualization for Trend and Sentiment Tracking in Twitter</i>. Proceedings of the IEEE Workshop on Interactive Visual Text Analytics (TextVis), 2012.",
		"url": "http://research.microsoft.com/en-us/um/people/shliu/tasmc/paper/Topic-Tracker.pdf",
		"categories": ["trend-analysis", "sentiment-analysis", "text-summarization", "overview", "classification", "navigation", "comparison", "corpora", "time-series", "social-media", "2d", "glyph", "linear"]
	},

	{
		"id": "Viegas2009",
		"title": "Wordle",
		"year": 2009,
		"authors": "Fernanda B. Viégas, Martin Wattenberg, and Jonathan Feinberg",
		"reference": "Fernanda B. Viégas, Martin Wattenberg, and Jonathan Feinberg. <i>Participatory Visualization with Wordle</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1137-1144, 2009.",
		"url": "https://doi.org/10.1109/TVCG.2009.171",
		"categories":["text-summarization", "relation-analysis", "overview", "classification", "2d", "corpora", "clouds", "text", "linear"]
	},

	{
		"id": "Gretarsson2012",
		"title": "TopicNets",
		"year": 2012,
		"authors": "Brynjar Gretarsson et al.",
		"reference": "Brynjar Gretarsson, John O’Donovan, Svetlin Bostandjiev, Tobias Höllerer, Arthur Asuncion, David Newman, and Padhraic Smyth. <i>TopicNets: Visual Analysis of Large Text Corpora with Topic Modeling</i>. ACM Transactions on Intelligent Systems and Technology (TIST), vol.3, no. 2, pp. 23:1-23:26, 2012.",
		"url": "https://doi.org/10.1145/2089094.2089099",
		"categories":["text-summarization", "relation-analysis", "overview", "classification", "papers", "2d", "document", "corpora", "networks", "node-link", "radial"]
	},

	{
		"id": "Fischer2012",
		"title": "Relaxed Event Timeline",
		"year": 2012,
		"authors": "Fabian Fischer, Florian Mansmann, and Daniel A. Keim",
		"reference": "Fabian Fischer, Florian Mansmann, and Daniel A. Keim. <i>Real-time Visual Analytics for Event Data Streams</i>. Proceedings of the Annual ACM Symposium on Applied Computing, pp. 801-806, 2012.",
		"url": "https://doi.org/10.1145/2245276.2245432",
		"categories":["event-analysis", "monitoring", "overview", "navigation", "2d", "time-series", "streams", "pixel-area", "linear"]
	},

	{
		"id": "Drieger2012",
		"title": "Interactive 3D Visualization of Semantic Network",
		"year": 2012,
		"authors": "Philipp Drieger",
		"reference": "Philipp Drieger. <i>Visual Text Analytics using Semantic Networks and Interactive 3D Visualization</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), pp. 43-47, 2012.",
		"url": "https://doi.org/10.2312/PE/EuroVAST/EuroVA12/043-047",
		"categories":["relation-analysis", "overview", "roi", "classification", "corpora", "networks", "social-media", "3d", "node-link", "metric"]
	},

	{
		"id": "Dou2012",
		"title": "LeadLine",
		"year": 2012,
		"authors": "Wenwen Dou et al.",
		"reference": "Wenwen Dou, Xiaoyu Wang, Drew Skau, William Ribarsky, and Michelle X. Zhou. <i>LeadLine: Interactive visual analysis of text data through event identification and exploration</i>. Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 93-102, 2012.",
		"url": "https://doi.org/10.1109/VAST.2012.6400485",
		"categories": ["text-summarization", "event-analysis", "overview", "roi", "comparison", "streams", "time-series", "geospatial", "social-media", "editorial-media", "2d", "line-plot", "maps", "clouds", "linear", "metric"]
	},

	{
		"id": "Angus2012",
		"title": "Concept Recurrence Plots",
		"year": 2012,
		"authors": "Daniel Angus, Andrew Smith, and Janet Wiles",
		"reference": "Daniel Angus, Andrew Smith, and Janet Wiles. <i>Conceptual Recurrence Plots: Revealing Patterns in Human Discourse</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 6, pp. 988-997, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2011.100",
		"categories": ["discourse-analysis", "overview", "comparison", "navigation", "roi", "document", "communication", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Alsakran2012",
		"title": "Streamit",
		"year": 2012,
		"authors": "Jamal Alsakran et al.",
		"reference": "Jamal Alsakran, Yang Chen, Dongning Luo, Ye Zhao, Jing Yang, Wenwen Dou, and Shixia Liu. <i>Real-Time Visualization of Streaming Text with a Force-Based Dynamic System</i>. IEEE Computer Graphics and Applications, vol. 32, no. 1, pp. 34-45, 2012.",
		"url": "https://doi.org/10.1109/MCG.2011.91",
		"categories": ["text-summarization", "overview", "monitoring", "comparison", "classification", "streams", "time-series", "editorial-media", "2d", "clouds", "glyph", "metric"]
	},

	{
		"id": "Wu2011",
		"title": "Semantic-preserving Word Clouds",
		"year": 2012,
		"authors": "Yingcai Wu et al.",
		"reference": "Yingcai Wu, Thomas Provan, Furu Wei, Shixia Liu, and Kwan-Liu Ma. <i>Semantic-Preserving Word Clouds by Seam Carving</i>. Computer Graphics Forum, vol. 30, no. 3, pp. 741-740, 2011.",
		"url": "https://doi.org/10.1111/j.1467-8659.2011.01923.x",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "2d", "corpora", "papers", "maps", "clouds", "text", "metric"]
	},

	{
		"id": "Lee2012",
		"title": "iVisClustering",
		"year": 2012,
		"authors": "Hanseung Lee et al.",
		"reference": "Hanseung Lee, Jaeyeon Kihm, Jaegul Choo, John Stasko, and Haesun Park. <i>iVisClustering: An Interactive Visual Document Clustering via Topic Modeling</i>. Computer Graphics Forum, vol. 31, no. 3pt3, pp. 1155-1164, 2012.",
		"url": "https://doi.org/10.1111/j.1467-8659.2012.03108.x",
		"categories": ["text-summarization", "relation-analysis", "classification", "2d", "corpora", "networks", "papers", "line-plot", "node-link", "maps", "linear", "metric"]
	},

	{
		"id": "Correll2011",
		"title": "TextViewer",
		"year": 2011,
		"authors": "M. Correll, M. Witmore, and M. Gleicher",
		"reference": "Michael Correll, Michael Witmore, and Michael Gleicher. <i>Exploring Collections of Tagged Text for Literary Scholarship</i>. Computer Graphics Forum, vol. 30, no. 3, pp. 731-740, 2011.",
		"url": "https://doi.org/10.1111/j.1467-8659.2011.01922.x",
		"categories": ["trend-analysis", "lexical-analysis", "roi", "overview", "2d", "document", "literature", "text", "line-plot", "metric"]
	},

	{
		"id": "Jusufi2014",
		"title": "Circular Cluster Layout",
		"year": 2014,
		"authors": "Ilir Jusufi et al.",
		"reference": "Ilir Jusufi, Andreas Kerren, Jiayi Liu, and Björn Zimmer. <i>Visual Exploration of Relationships between Document Clusters</i>. Proceedings of the International Conference on Information Visualization Theory and Applications (IVAPP), pp. 195-203, 2014.",
		"url": "https://doi.org/10.5220/0004754301950203",
		"categories": ["text-summarization", "relation-analysis", "classification", "comparison", "overview", "2d", "corpora", "networks", "papers", "node-link", "radial", "metric"]
	},

	{
		"id": "Cao2011",
		"title": "SolarMap",
		"year": 2011,
		"authors": "Nan Cao et al.",
		"reference": "Nan Cao, David Gotz, Jimeng Sun, Yu-Ru Lin and Huamin Qu. <i>SolarMap: Multifaceted Visual Analytics for Topic Exploration</i>. Proceedings of IEEE 11th International Conference on Data Mining (ICDM), pp. 101-110, 2011.",
		"url": "https://doi.org/10.1109/ICDM.2011.135",
		"categories": ["text-summarization", "relation-analysis", "classification", "comparison", "overview", "2d", "corpora", "networks", "node-link", "pixel-area", "radial", "metric"]
	},

	{
		"id": "Krstajic2011",
		"title": "CloudLines",
		"year": 2011,
		"authors": "Miloš Krstajić, Enrico Bertini, and Daniel A. Keim",
		"reference": "Miloš Krstajić, Enrico Bertini, and Daniel A. Keim. <i>CloudLines: Compact Display of Event Episodes in Multiple Time-Series</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 17, no. 12, pp. 2432-2439, 2011.",
		"url": "https://doi.org/10.1109/TVCG.2011.179",
		"categories": ["event-analysis", "roi", "comparison", "streams", "time-series", "editorial-media", "2d", "pixel-area", "linear", "metric"]
	},

	{
		"id": "Xu2013",
		"title": "Topic Competition Visualization",
		"year": 2013,
		"authors": "Panpan Xu et al.",
		"reference": "Panpan Xu, Yingcai Wu, Enxun Wei, Tai-Quan Peng, Shixia Liu, Jonathan J.H. Zhu, and Huamin Qu. <i>Visual Analysis of Topic Competition on Social Media</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 12, pp. 2012-2021, 2013.",
		"url": "https://doi.org/10.1109/TVCG.2013.221",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "corpora", "time-series", "social-media", "2d", "line-plot", "clouds", "pixel-area", "metric"]
	},

	{
		"id": "Krstajic2010",
		"title": "Semantic News Analysis",
		"year": 2010,
		"authors": "Miloš Krstajić et al.",
		"reference": "Miloš Krstajić, Florian Mansmann, Andreas Stoffel, Martin Atkinson, and Daniel A. Keim. <i>Processing online news streams for large-scale semantic analysis</i>. Proceedings of IEEE 26th International Conference on Data Engineering Workshops (ICDEW), pp. 215-220, 2010.",
		"url": "https://doi.org/10.1109/ICDEW.2010.5452710",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "monitoring", "streams", "time-series", "editorial-media", "2d", "line-plot", "linear"]
	},

	{
		"id": "Endert2013",
		"title": "Typograph",
		"year": 2013,
		"authors": "Alex Endert et al.",
		"reference": "Alex Endert, Russ Burtner, Nick Cramer, Ralph Perko, Shawn Hampton, and Kristin Cook. <i>Typograph: Multiscale spatial exploration of text documents</i>. Proceedings of IEEE International Conference on Big Data, pp. 17-24, 2013.",
		"url": "https://doi.org/10.1109/BigData.2013.6691709",
		"categories": ["text-summarization", "overview", "classification", "navigation", "corpora", "editorial-media", "2d", "maps", "clouds", "text", "metric"]
	},

	{
		"id": "Dou2011",
		"title": "ParallelTopics",
		"year": 2011,
		"authors": "Wenwen Dou et al.",
		"reference": "Wenwen Dou, Xiaoyu Wang, Remco Chang, and William Ribarsky. <i>ParallelTopics: A probabilistic approach to exploring document collections</i>. Proceedings of IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 231-240, 2011.",
		"url": "https://doi.org/10.1109/VAST.2011.6102461",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "corpora", "time-series", "papers", "2d", "line-plot", "glyph", "clouds", "linear", "metric"]
	},

	{
		"id": "Chou2011",
		"title": "PaperVis",
		"year": 2011,
		"authors": "Jia-Kai Chou and Chuan-Kai Yang",
		"reference": "Jia-Kai Chou and Chuan-Kai Yang. <i>PaperVis: Literature Review Made Easy</i>. Computer Graphics Forum, vol. 30, no. 3, pp. 720-731, 2011.",
		"url": "https://doi.org/10.1111/j.1467-8659.2011.01921.x",
		"categories": ["relation-analysis", "roi", "navigation", "overview", "2d", "corpora", "networks", "papers", "node-link", "radial"]
	},

	{
		"id": "Geng2015",
		"title": "ShakerVis",
		"year": 2015,
		"authors": "Zhao Geng et al.",
		"reference": "Zhao Geng, Tom Cheesman, Robert S. Laramee, Kevin Flanagan, and Stephan Thiel. <i>ShakerVis: Visual analysis of segment variation of German translations of Shakespeare's Othello</i>. Information Visualization, vol. 14, no. 4, pp. 273-288, 2015.",
		"url": "https://doi.org/10.1177/1473871613495845",
		"categories": ["translation-analysis", "overview", "comparison", "roi", "2d", "corpora", "literature", "line-plot", "pixel-area", "clouds", "linear", "metric"]
	},

	{
		"id": "Cui2011",
		"title": "TextFlow",
		"year": 2011,
		"authors": "Weiwei Cui et al.",
		"reference": "Weiwei Cui, Shixia Liu, Li Tan, Conglei Shi, Yangqiu Song, Zekai Gao, Huamin Qu, and Xin Tong. <i>TextFlow: Towards Better Understanding of Evolving Topics in Text</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 17, no. 12, pp. 2412-2421, 2011.",
		"url": "https://doi.org/10.1109/TVCG.2011.239",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "roi", "corpora", "time-series", "papers", "2d", "line-plot", "glyph", "metric"]
	},

	{
		"id": "Cao2010",
		"title": "FacetAtlas",
		"year": 2010,
		"authors": "Nan Cao et al.",
		"reference": "Nan Cao, Jimeng Sun, Yu-Ru Lin, David Gotz, Shixia Liu, and Huamin Qu. <i>FacetAtlas: Multifaceted Visualization for Rich Text Corpora</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 16, no. 6, pp. 1172-1181, 2010.",
		"url": "https://doi.org/10.1109/TVCG.2010.154",
		"categories": ["text-summarization", "relation-analysis", "classification", "comparison", "overview", "navigation", "2d", "corpora", "reviews", "networks", "node-link", "pixel-area", "metric"]
	},

	{
		"id": "Lescovec2009",
		"title": "MemeTracker",
		"year": 2009,
		"authors": "Jure Leskovec, Lars Backstrom, and Jon Kleinberg",
		"reference": "Jure Leskovec, Lars Backstrom, and Jon Kleinberg. <i>Meme-tracking and the dynamics of the news cycle</i>. Proceedings of the 15th ACM SIGKDD international conference on Knowledge discovery and data mining, pp. 497-506, 2009.",
		"url": "https://doi.org/10.1145/1557019.1557077",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "corpora", "time-series", "social-media", "editorial-media", "2d", "line-plot", "metric"]
	},

	{
		"id": "AlbrechtBuehler2005",
		"title": "TextPool",
		"year": 2005,
		"authors": "Conrad Albrecht-Buehler, Benjamin Watson, and David A. Shamma",
		"reference": "Conrad Albrecht-Buehler, Benjamin Watson, and David A. Shamma. <i>Visualizing live text streams using motion and temporal pooling</i>. IEEE Computer Graphics and Applications, vol. 25, no. 3, pp. 52-59, 2005.",
		"url": "https://doi.org/10.1109/MCG.2005.70",
		"categories": ["text-summarization", "overview", "roi", "monitoring", "streams", "time-series", "editorial-media", "2d", "node-link", "clouds", "text", "metric"]
	},

	{
		"id": "DeCamp2005",
		"title": "Gist Icons",
		"year": 2005,
		"authors": "Philip DeCamp et al.",
		"reference": "Philip DeCamp, Amber Frid-Jimenez, Jethran Guiness, and Deb Roy. <i>Gist icons: Seeing meaning in large bodies of literature</i>. Proceedings of the IEEE Symposium on Information Visualization (InfoVis), 2005.",
		"url": "http://media.mit.edu/cogmac/publications/IEEEIcons.pdf",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "corpora", "communication", "patents", "2d", "glyph", "metric"]
	},

	{
		"id": "Gregory2006",
		"title": "Sentiment Rose Plots",
		"year": 2006,
		"authors": "Michelle L. Gregory et al.",
		"reference": "Michelle L. Gregory, Nancy Chinchor, Paul Whitney, Richard Carter, Elizabeth Hetzler, and Alan Turner. <i>User-directed sentiment analysis: visualizing the affective content of documents</i>. Proceedings of the Workshop on Sentiment and Subjectivity in Text (SST), pp. 23-30, 2006.",
		"url": "http://dl.acm.org/citation.cfm?id=1654645",
		"categories": ["sentiment-analysis", "overview", "classification", "comparison", "document", "corpora", "reviews", "2d", "glyph", "metric"]
	},

	{
		"id": "Abbasi2007",
		"title": "Ink Blots",
		"year": 2007,
		"authors": "Ahmed Abbasi and Hsinchun Chen",
		"reference": "Ahmed Abbasi and Hsinchun Chen. <i>Categorization and analysis of text in computer mediated communication archives using visualization</i>. Proceedings of the ACM/IEEE-CS joint conference on Digital libraries (JCDL), pp. 11-18, 2007.",
		"url": "https://doi.org/10.1145/1255175.1255178",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "document", "corpora", "social-media", "communication", "2d", "text", "pixel-area", "metric"]
	},

	{
		"id": "Don2007",
		"title": "FeatureLens",
		"year": 2007,
		"authors": "Anthony Don et al.",
		"reference": "Anthony Don, Elena Zheleva, Machon Gregory, Sureyya Tarkan, Loretta Auvil, Tanya Clement, Ben Shneiderman, and Catherine Plaisant. <i>Discovering interesting usage patterns in text collections: integrating text mining with visualization</i>. Proceedings of the ACM conference on information and knowledge management (CIKM), pp. 213-222, 2007.",
		"url": "https://doi.org/10.1145/1321440.1321473",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "classification", "corpora", "time-series", "literature", "editorial-media", "2d", "line-plot", "text", "pixel-area", "linear"]
	},

	{
		"id": "Benson2008",
		"title": "Skimmer",
		"year": 2008,
		"authors": "Jordan Riley Benson et al.",
		"reference": "Jordan Riley Benson, Phillip Lafleur, David Crist and Benjamin Watson. <i>Agent-based Visualization of Streaming Text</i>. Poster Abstracts of IEEE VIS, 2008.",
		"url": "http://www.researchgate.net/publication/254412196_Agent-based_Visualization_of_Streaming_Text",
		"categories": ["text-summarization", "overview", "monitoring", "classification", "streams", "time-series", "social-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Andrews2002",
		"title": "InfoSky",
		"year": 2002,
		"authors": "Keith Andrews et al.",
		"reference": "Keith Andrews, Wolfgang Kienreich, Vedran Sabol, Jutta Becker, Georg Droschl, Frank Kappe, Michael Granitzer, Peter Auer, and Klaus Tochtermann. <i>The InfoSky Visual Explorer: Exploiting Hierarchical Structure and Document Similarities</i>. Information Visualization, vol. 1, no. 2-3, pp. 166-181, 2002.",
		"url": "https://doi.org/10.1057/palgrave.ivs.9500023",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "editorial-media", "2d", "clouds", "maps", "metric"]
	},

	{
		"id": "Brandes2003",
		"title": "Dynamic Discourse Analysis",
		"year": 2003,
		"authors": "Ulrik Brandes and Steven R. Corman",
		"reference": "Ulrik Brandes and Steven R. Corman. <i>Visual Unrolling of Network Evolution and the Analysis of Dynamic Discourse</i>. Information Visualization, vol. 2, no. 1, pp. 40-50, 2003.",
		"url": "https://doi.org/10.1057/palgrave.ivs.9500037",
		"categories": ["text-summarization", "discourse-analysis", "overview", "comparison", "navigation", "corpora", "editorial-media", "2d", "3d", "node-link", "metric"]
	},

	{
		"id": "Hetzler2004",
		"title": "IN-SPIRE Galaxies",
		"year": 2004,
		"authors": "Elizabeth Hetzler and Alan Turner",
		"reference": "Elizabeth Hetzler and Alan Turner. <i>Analysis experiences using information visualization</i>. IEEE Computer Graphics and Applications, vol. 24, no. 5, pp. 22-26, 2004.",
		"url": "https://doi.org/10.1109/MCG.2004.22",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "editorial-media", "2d", "clouds", "maps", "metric"]
	},

	{
		"id": "Kerr2003",
		"title": "Thread Arcs",
		"year": 2003,
		"authors": "Bernard Kerr",
		"reference": "Bernard Kerr. <i>Thread Arcs: an email thread visualization</i>. Proceedings of IEEE Symposium on Information Visualization (InfoVis), pp. 211-218, 2003.",
		"url": "https://doi.org/10.1109/INFVIS.2003.1249028",
		"categories": ["trend-analysis", "relation-analysis", "comparison", "overview", "corpora", "communication", "2d", "node-link", "linear"]
	},

	{
		"id": "Paulovich2008",
		"title": "Hierarchical Document Map",
		"year": 2008,
		"authors": "Fernando V. Paulovich and Rosane Minghim",
		"reference": "Fernando V. Paulovich and Rosane Minghim. <i>HiPP: A Novel Hierarchical Point Placement Strategy and its Application to the Exploration of Document Collections</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 14, no. 6, pp. 1229-1236, 2008.",
		"url": "https://doi.org/10.1109/TVCG.2008.138",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "editorial-media", "papers", "2d", "clouds", "metric"]
	},

	{
		"id": "Fekete2000",
		"title": "Compus",
		"year": 2000,
		"authors": "Jean-Daniel Fekete and Nicole Dufournaud",
		"reference": "Jean-Daniel Fekete and Nicole Dufournaud. <i>Compus: visualization and analysis of structured documents for understanding social life in the 16th century</i>. Proceedings of the ACM conference on Digital Libraries (DL), pp. 47-55, 2000.",
		"url": "https://doi.org/10.1145/336597.336632",
		"categories": ["translation-analysis", "lexical-analysis", "overview", "navigation", "2d", "corpora", "literature", "pixel-area", "linear"]
	},

	{
		"id": "Monroy2002",
		"title": "Interactive Timeline Viewer",
		"year": 2002,
		"authors": "Carlos Monroy et al.",
		"reference": "Carlos Monroy, Rajiv Kochumman, Richard Furuta, and Eduardo Urbina. <i>Interactive Timeline Viewer (ItLv): A Tool to Visualize Variants among Documents</i>. Visual Interfaces to Digital Libraries, pp. 39-49, 2002.",
		"url": "https://doi.org/10.1007/3-540-36222-3_4",
		"categories": ["translation-analysis", "lexical-analysis", "overview", "navigation", "2d", "corpora", "literature", "line-plot", "clouds", "linear"]
	},

	{
		"id": "Zhao2007",
		"title": "Content-temporal-social-based Event Visualization",
		"year": 2007,
		"authors": "Qiankun Zhao and Prasenjit Mitra",
		"reference": "Qiankun Zhao and Prasenjit Mitra. <i>Event Detection and Visualization for Social Text Streams</i>. Proceedings of the International Conference on Weblogs and Social Media (ICWSM), 2007.",
		"url": "http://www.icwsm.org/papers/3--Zhao-Mitra.pdf",
		"categories": ["event-analysis", "relation-analysis", "overview", "classification", "corpora", "time-series", "networks", "social-media", "communication", "2d", "node-link", "metric"]
	},

	{
		"id": "Makki2014",
		"title": "Context-Specific Sentiment Lexicon Expansion",
		"year": 2014,
		"authors": "Raheleh Makki, Stephen Brooks, and Evangelos E. Milios",
		"reference": "Raheleh Makki, Stephen Brooks, and Evangelos E. Milios. <i>Context-Specific Sentiment Lexicon Expansion via Minimal User Interaction</i>. Proceedings of the International Conference on Information Visualization Theory and Applications (IVAPP), pp. 178-186, 2014.",
		"url": "https://doi.org/10.5220/0004745301780186",
		"categories": ["sentiment-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "reviews", "2d", "node-link", "clouds", "metric"]
	},

	{
		"id": "Subasic2008",
		"title": "STORIES",
		"year": 2008,
		"authors": "Ilija Subašić and Bettina Berendt",
		"reference": "Ilija Subašić and Bettina Berendt. <i>Web Mining for Understanding Stories through Graph Visualisation</i>. Proceedings of the IEEE International Conference on Data Mining (ICDM), pp. 570-579, 2008.",
		"url": "https://doi.org/10.1109/ICDM.2008.138",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "overview", "roi", "navigation", "corpora", "time-series", "networks", "editorial-media", "2d", "node-link", "metric"]
	},

	{
		"id": "Regan2010",
		"title": "Character Flower",
		"year": 2010,
		"authors": "Tim Regan and Linda Becker",
		"reference": "Tim Regan and Linda Becker. <i>Visualizing the Text of Philip Pullman's Trilogy \"His Dark Materials\"</i>. Proceedings of the Nordic Conference on Human-Computer Interaction (NordiCHI), pp. 759-764, 2010.",
		"url": "https://doi.org/10.1145/1868914.1869023",
		"categories": ["relation-analysis", "lexical-analysis", "overview", "comparison", "document", "networks", "literature", "2d", "node-link", "radial"]
	},

	{
		"id": "Oelke2014",
		"title": "DiTop-View",
		"year": 2014,
		"authors": "Daniela Oelke et al.",
		"reference": "Daniela Oelke, Hendrik Strobelt, Christian Rohrdantz, Iryna Gurevych, and Oliver Deussen. <i>Comparative Exploration of Document Collections: a Visual Analytics Approach</i>. Computer Graphics Forum, vol. 33, no. 3, pp. 201-210, 2014.",
		"url": "https://doi.org/10.1111/cgf.12376",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "corpora", "editorial-media", "papers", "2d", "glyph", "metric"]
	},

	{
		"id": "Kochtchi2014",
		"title": "Network of Names",
		"year": 2014,
		"authors": "Artjom Kochtchi, Tatiana von Landesberger, and Chris Biemann",
		"reference": "Artjom Kochtchi, Tatiana von Landesberger, and Chris Biemann. <i>Networks of Names: Visual Exploration and Semi-Automatic Tagging of Social Networks from Newspaper Articles</i>. Computer Graphics Forum, vol. 33, no. 3, pp. 211-220, 2014.",
		"url": "https://doi.org/10.1111/cgf.12377",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "corpora", "networks", "editorial-media", "2d", "node-link", "metric"]
	},

	{
		"id": "Hoque2014",
		"title": "ConVis",
		"year": 2014,
		"authors": "Enamul Hoque and Giuseppe Carenini",
		"reference": "Enamul Hoque and Giuseppe Carenini. <i>ConVis: A Visual Text Analytic System for Exploring Blog Conversations</i>. Computer Graphics Forum, vol. 33, no. 3, pp. 221-230, 2014.",
		"url": "https://doi.org/10.1111/cgf.12378",
		"categories": ["text-summarization", "discourse-analysis", "sentiment-analysis", "overview", "classification", "navigation", "comparison", "corpora", "networks", "social-media", "2d", "node-link", "text", "pixel-area", "metric", "radial"]
	},

	{
		"id": "Weiler2015",
		"title": "Stor-e-Motion",
		"year": 2015,
		"authors": "Andreas Weiler et al.",
		"reference": "Andreas Weiler, Michael Grossniklaus, and Marc H. Scholl. <i>The Stor-e-Motion Visualization for Topic Evolution Tracking in Text Data Streams</i>. Proceedings of the International Conference on Information Visualization Theory and Applications (IVAPP), pp. 29-39, 2015.",
		"url": "https://doi.org/10.5220/0005292900290039",
		"categories": ["text-summarization", "sentiment-analysis", "event-analysis", "overview", "classification", "monitoring", "document", "corpora", "streams", "time-series", "geospatial", "social-media", "editorial-media", "literature", "2d", "line-plot", "clouds", "linear"]
	},

	{
		"id": "Eck2010",
		"title": "VOSViewer",
		"year": 2010,
		"authors": "Nees Jan van Eck and Ludo Waltman",
		"reference": "Nees Jan van Eck and Ludo Waltman. <i>Software survey: VOSviewer, a computer program for bibliometric mapping</i>. Scientometrics, vol. 84, no. 2, pp. 523-538, 2010.",
		"url": "https://doi.org/10.1007/s11192-009-0146-3",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "navigation", "corpora", "papers", "2d", "clouds", "maps", "metric"]
	},

	{
		"id": "Diakopoulos2014",
		"title": "Lingoscope",
		"year": 2014,
		"authors": "Nicholas Diakopoulos et al.",
		"reference": "Nicholas Diakopoulos, Amy X. Zhang, Dag Elgesem, and Andrew Salway. <i>Identifying and Analyzing Moral Evaluation Frames in Climate Change Blog Discourse</i>. Proceedings of the International Conference on Weblogs and Social Media (ICWSM), pp. 583-586, 2014.",
		"url": "http://www.aaai.org/ocs/index.php/ICWSM/ICWSM14/paper/view/8064",
		"categories": ["sentiment-analysis", "stance-analysis", "discourse-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "text", "linear"]
	},

	{
		"id": "Alexander2014",
		"title": "Serendip",
		"year": 2014,
		"authors": "Eric Alexander et al.",
		"reference": "Eric Alexander, Joe Kohlmann, Robin Valenza, and Michael Gleicher. <i>Serendip: Turning Topics Back to the Text</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 173-182, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042493",
		"categories": ["text-summarization", "trend-analysis", "overview", "navigation", "comparison", "uncertainty", "corpora", "literature", "2d", "line-plot", "text", "pixel-area", "linear"]
	},

	{
		"id": "Choo2013",
		"title": "UTOPIAN",
		"year": 2013,
		"authors": "Jaegul Choo et al.",
		"reference": "Jaegul Choo, Changhyun Lee, Chandan K. Reddy, and Haesun Park. <i>UTOPIAN: User-Driven Topic Modeling Based on Interactive Nonnegative Matrix Factorization</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 12, pp. 1992-2001, 2013.",
		"url": "https://doi.org/10.1109/TVCG.2013.212",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "navigation", "corpora", "papers", "reviews", "2d", "clouds", "node-link", "metric"]
	},

	{
		"id": "Endert2012",
		"title": "ForceSPIRE",
		"year": 2012,
		"authors": "Alex Endert, Patrick Fiaux, and Chris North",
		"reference": "Alex Endert, Patrick Fiaux, and Chris North. <i>Semantic interaction for visual text analytics</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 473-482, 2012.",
		"url": "https://doi.org/10.1145/2207676.2207741",
		"categories": ["text-summarization", "relation-analysis", "overview", "roi", "navigation", "corpora", "2d", "clouds", "node-link", "metric"]
	},

	{
		"id": "Wanner2009",
		"title": "RSS News Feeds Sentiment Visualization",
		"year": 2009,
		"authors": "Franz Wanner et al.",
		"reference": "Franz Wanner, Christian Rohrdantz, Florian Mansmann, Daniela Oelke, and Daniel A. Keim. <i>Visual Sentiment Analysis of RSS News Feeds Featuring the US Presidential Election in 2008</i>. Proceedings of the IUI Workshop on Visual Interfaces to the Social and the Semantic Web (VISSW), 2009.",
		"url": "http://ceur-ws.org/Vol-443/",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "corpora", "time-series", "editorial-media", "2d", "glyph", "linear"]
	},

	{
		"id": "Chen2009",
		"title": "Exemplar-based Visualization",
		"year": 2009,
		"authors": "Yanhua Chen et al.",
		"reference": "Yanhua Chen, Lijun Wang, Ming Dong, and Jing Hua. <i>Exemplar-based Visualization of Large Document Corpus</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1161-1168, 2009.",
		"url": "https://doi.org/10.1109/TVCG.2009.140",
		"categories": ["text-summarization", "overview", "classification", "corpora", "2d", "clouds", "metric"]
	},

	{
		"id": "Kim2011",
		"title": "WordBridge",
		"year": 2011,
		"authors": "KyungTae Kim et al.",
		"reference": "KyungTae Kim, Sungahn Ko, Niklas Elmqvist, and David S. Ebert. <i>WordBridge: Using Composite Tag Clouds in Node-Link Diagrams for Visualizing Content and Relations in Text Corpora</i>. Proceedings of the Hawaii International Conference on System Sciences (HICSS), pp. 1-8, 2011.",
		"url": "https://doi.org/10.1109/HICSS.2011.499",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "corpora", "networks", "2d", "node-link", "clouds", "metric"]
	},

	{
		"id": "Rohrdantz2012",
		"title": "Time Density Plots",
		"year": 2012,
		"authors": "Christian Rohrdantz et al.",
		"reference": "Christian Rohrdantz, Ming C. Hao, Umeshwar Dayal, Lars-Erik Haug, and Daniel A. Keim. <i>Feature-Based Visual Sentiment Analysis of Text Document Streams</i>. ACM Transactions on Intelligent Systems and Technology (TIST), vol. 3, no. 2, pp. 26:1-26:25, 2012.",
		"url": "https://doi.org/10.1145/2089094.2089102",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "roi", "classification", "comparison", "uncertainty", "streams", "time-series", "editorial-media", "reviews", "2d", "glyph", "line-plot", "linear"]
	},

	{
		"id": "Chuang2012",
		"title": "Stanford Dissertation Browser",
		"year": 2012,
		"authors": "Jason Chuang et al.",
		"reference": "Jason Chuang, Daniel Ramage, Christopher Manning, and Jeffrey Heer. <i>Interpretation and trust: designing model-driven visualizations for text analysis</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 443-452, 2012.",
		"url": "https://doi.org/10.1145/2207676.2207738",
		"categories": ["relation-analysis", "overview", "comparison", "navigation", "corpora", "papers", "2d", "clouds", "radial", "metric"]
	},

	{
		"id": "Krstajic2012",
		"title": "Real-time Twitter Event Detection",
		"year": 2012,
		"authors": "Miloš Krstajić et al.",
		"reference": "Miloš Krstajić, Christian Rohrdantz, Michael Hund, and Andreas Weiler. <i>Getting There First: Real-Time Detection of Real-World Incidents on Twitter</i>. Proceedings of the IEEE Workshop on Interactive Visual Text Analytics (TextVis), 2012.",
		"url": "http://bib.dbvis.de/publications/details/451",
		"categories": ["event-analysis", "sentiment-analysis", "overview", "classification", "comparison", "monitoring", "streams", "time-series", "social-media", "2d", "glyph", "linear"]
	},

	{
		"id": "Rohrdantz2012_2",
		"title": "Suffixes Distribution Visualization",
		"year": 2012,
		"authors": "Christian Rohrdantz et al.",
		"reference": "Christian Rohrdantz, Andreas Niekler, Annette Hautli, Miriam Butt, and Daniel A. Keim. <i>Lexical semantics and distribution of suffixes: a visual analysis</i>. Proceedings of the EACL Joint Workshop of LINGVIS & UNCLH (EACL), pp. 7-15, 2012.",
		"url": "http://dl.acm.org/citation.cfm?id=2388655.2388657",
		"categories": ["text-summarization", "lexical-analysis", "trend-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "editorial-media", "2d", "glyph", "linear"]
	},

	{
		"id": "Hao2013_1",
		"title": "Pixel Sentiment Geo Map",
		"year": 2013,
		"authors": "Ming C. Hao et al.",
		"reference": "Ming C. Hao, Christian Rohrdantz, Halldor Janetzko, Daniel A. Keim, Umeshwar Dayal, Lars-Erik Haug, Meichun Hsu, and Florian Stoffel. <i>Visual sentiment analysis of customer feedback streams using geo-temporal term associations</i>. Information Visualization, vol. 12, no. 3-4, pp. 273-290, 2013.",
		"url": "https://doi.org/10.1177/1473871613481691",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "streams", "geospatial", "reviews", "social-media", "2d", "pixel-area", "maps", "clouds", "metric"]
	},

	{
		"id": "Hao2013_2",
		"title": "Key Term Geo Map",
		"year": 2013,
		"authors": "Ming C. Hao et al.",
		"reference": "Ming C. Hao, Christian Rohrdantz, Halldor Janetzko, Daniel A. Keim, Umeshwar Dayal, Lars-Erik Haug, Meichun Hsu, and Florian Stoffel. <i>Visual sentiment analysis of customer feedback streams using geo-temporal term associations</i>. Information Visualization, vol. 12, no. 3-4, pp. 273-290, 2013.",
		"url": "https://doi.org/10.1177/1473871613481691",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "streams", "geospatial", "reviews", "social-media", "2d", "maps", "clouds", "metric"]
	},

	{
		"id": "Hao2013_3",
		"title": "Self-organizing Term Association Map",
		"year": 2013,
		"authors": "Ming C. Hao et al.",
		"reference": "Ming C. Hao, Christian Rohrdantz, Halldor Janetzko, Daniel A. Keim, Umeshwar Dayal, Lars-Erik Haug, Meichun Hsu, and Florian Stoffel. <i>Visual sentiment analysis of customer feedback streams using geo-temporal term associations</i>. Information Visualization, vol. 12, no. 3-4, pp. 273-290, 2013.",
		"url": "https://doi.org/10.1177/1473871613481691",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "streams", "reviews", "social-media", "2d", "maps", "text", "metric"]
	},


	{
		"id": "Hao2013_4",
		"title": "Pixel Cell-based Sentiment Calendar",
		"year": 2013,
		"authors": "Ming C. Hao et al.",
		"reference": "Ming C. Hao, Christian Rohrdantz, Halldor Janetzko, Daniel A. Keim, Umeshwar Dayal, Lars-Erik Haug, Meichun Hsu, and Florian Stoffel. <i>Visual sentiment analysis of customer feedback streams using geo-temporal term associations</i>. Information Visualization, vol. 12, no. 3-4, pp. 273-290, 2013.",
		"url": "https://doi.org/10.1177/1473871613481691",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "streams", "time-series", "geospatial", "reviews", "social-media", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Wu2010",
		"title": "OpinionSeer",
		"year": 2010,
		"authors": "Yingcai Wu et al.",
		"reference": "Yingcai Wu, Furu Wei, Shixia Liu, Norman Au, Weiwei Cui, Hong Zhou, and Huamin Qu. <i>OpinionSeer: Interactive Visualization of Hotel Customer Feedback</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 16, no. 6, pp. 1109-1118, 2010.",
		"url": "https://doi.org/10.1109/TVCG.2010.183",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "uncertainty", "corpora", "time-series", "geospatial", "reviews", "2d", "pixel-area", "clouds", "radial", "metric"]
	},

	{
		"id": "Fortuna2005",
		"title": "Document Atlas",
		"year": 2005,
		"authors": "Blaž Fortuna, Marko Grobelnik, and Dunja Mladenić",
		"reference": "Blaž Fortuna, Marko Grobelnik, and Dunja Mladenić. <i>Visualization of Text Document Corpus</i>. Informatica (Slovenia), vol. 29, no. 4, pp. 497-504, 2005.",
		"url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.140.8807",
		"categories": ["text-summarization","classification","overview","navigation","corpora","patents","papers","editorial-media","2d","clouds","maps","metric"]
	},

	{
		"id": "Biuk-Aghai2013",
		"title": "Wikipedia Recent Changes Visualization",
		"year": 2013,
		"authors": "Robert P. Biuk-Aghai et al.",
		"reference": "Robert P. Biuk-Aghai, Roy Chi Kit Chan, Yain-Whar Si, and Simon Fong. <i>Visualizing recent changes in Wikipedia</i>. Science China Information Sciences, vol. 56, no. 5, pp. 1-15, 2013.",
		"url": "https://doi.org/10.1007/s11432-013-4867-9",
		"categories": ["event-analysis", "trend-analysis", "roi", "comparison", "streams", "time-series", "social-media", "editorial-media", "2d", "glyph", "linear"]
	},

	{
		"id": "Oelke2012",
		"title": "Newspaper Quotation Thumbnails",
		"year": 2012,
		"authors": "Daniela Oelke, Benno Geißelmann, and Daniel A. Keim",
		"reference": "Daniela Oelke, Benno Geißelmann, and Daniel A. Keim. <i>Visual Analysis of Explicit Opinion and News Bias in German Soccer Articles</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), pp. 49-53, 2012.",
		"url": "https://doi.org/10.2312/PE/EuroVAST/EuroVA12/049-053",
		"categories": ["relation-analysis", "classification", "overview", "comparison", "corpora", "editorial-media", "2d", "pixel-area", "glyph", "clouds", "metric"]
	},

	{
		"id": "Oelke2009",
		"title": "Opinion Cluster Thumbnails",
		"year": 2009,
		"authors": "Daniela Oelke et al.",
		"reference": "Daniela Oelke, Ming Hao, Christian Rohrdantz, Daniel A. Keim, Umeshwar Dayal, Lars-Erik Haug, and Halldór Janetzko. <i>Visual opinion analysis of customer feedback data</i>. Proceedings of IEEE Symposium on Visual Analytics Science and Technology (VAST), pp. 187-194, 2009.",
		"url": "https://doi.org/10.1109/VAST.2009.5333919",
		"categories": ["sentiment-analysis", "classification", "overview", "comparison", "corpora", "reviews", "2d", "pixel-area", "maps", "text", "metric"]
	},

	{
		"id": "Steed2012",
		"title": "High Throughput Text Streams Visualization",
		"year": 2012,
		"authors": "Chad A. Steed et al.",
		"reference": "Chad A. Steed, Thomas E. Potok, Robert M. Patton, John R. Goodall, Christopher Maness, and James Senter. <i>Interactive Visual Analysis of High Throughput Text Streams</i>. Proceedings of the Workshop on Interactive Visual Text Analytics (TextVis), 2012.",
		"url": "http://research.microsoft.com/en-us/um/people/shliu/tasmc/paper/Interactive-Visual-Analysis.pdf",
		"categories": ["trend-analysis", "roi", "comparison", "navigation", "streams", "time-series", "editorial-media", "2d", "line-plot", "glyph", "linear"]
	},

	{
		"id": "Janicke2014",
		"title": "Text Re-use Grid",
		"year": 2014,
		"authors": "Stefan Jänicke et al.",
		"reference": "Stefan Jänicke, Annette Geßner, Marco Büchler, and Gerik Scheuermann. <i>Visualizations for Text Re-use</i>. Proceedings of the International Conference on Information Visualization Theory and Applications (IVAPP), pp. 59-70, 2014.",
		"url": "http://www.informatik.uni-leipzig.de/~stjaenicke/Visualizations_for_Text-Reuse.pdf",
		"categories": ["translation-analysis", "comparison", "overview", "corpora", "literature", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Siirtola2014",
		"title": "Text Variation Explorer",
		"year": 2014,
		"authors": "Harri Siirtola et al.",
		"reference": "Harri Siirtola, Tanja Säily, Terttu Nevalainen, and Kari-Jouko Räihä. <i>Text Variation Explorer: Towards interactive visualization tools for corpus linguistics</i>. International Journal of Corpus Linguistics, vol. 19, no. 3, pp. 417-429, 2014.",
		"url": "https://doi.org/10.1075/ijcl.19.3.05sii",
		"categories": ["text-summarization", "lexical-analysis", "trend-analysis", "roi", "classification", "comparison", "navigation", "overview", "document", "literature", "2d", "text", "line-plot", "clouds", "linear", "metric"]
	},

	{
		"id": "Kaufer2006",
		"title": "DocuScope",
		"year": 2006,
		"authors": "David Kaufer and Suguru Ishizaki",
		"reference": "David Kaufer and Suguru Ishizaki. <i>A Corpus Study of Canned Letters: Mining the Latent Rhetorical Proficiencies Marketed to Writers-in-a-Hurry and Non-Writers</i>. IEEE Transactions on Professional Communication, vol. 49, no. 3, pp. 254-266, 2006.",
		"url": "https://doi.org/10.1109/TPC.2006.880743",
		"categories": ["text-summarization", "lexical-analysis", "comparison", "overview", "navigation", "document", "corpora", "communication", "literature", "2d", "text", "clouds", "metric"]
	},

	{
		"id": "Wielfaert2013",
		"title": "Token Cloud Visualization",
		"year": 2013,
		"authors": "Thomas Wielfaert, Kris Heylen, and Dirk Speelman",
		"reference": "Thomas Wielfaert, Kris Heylen, and Dirk Speelman. <i>Interactive visualizations of Semantic Vector Spaces for lexicological analysis</i>. Les actes de la conférence TALN-RECITAL, pp. 154-166, 2013.",
		"url": "http://www.taln2013.org/actes/www/volumes/taln-recital2013_volume3.pdf#page=166",
		"categories": ["text-summarization", "lexical-analysis", "classification", "comparison", "overview", "navigation", "corpora", "editorial-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Behrisch2012",
		"title": "News Auditor",
		"year": 2012,
		"authors": "Michael Behrisch et al.",
		"reference": "Michael Behrisch, Miloš Krstajić, Tobias Schreck, and Daniel A. Keim. <i>The News Auditor: Visual Exploration of Clusters of Stories</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), pp. 61-65, 2012.",
		"url": "https://doi.org/10.2312/PE/EuroVAST/EuroVA12/061-065",
		"categories": ["translation-analysis", "overview", "classification", "comparison", "navigation", "roi", "corpora", "editorial-media", "2d", "pixel-area", "text", "linear"]
	},

	{
	    "id": "Huron2013",
	    "title": "Visual Sedimentation",
	    "year": 2013,
		"authors": "Samuel Huron, Romain Vuillemot, and Jean-Daniel Fekete",
	    "reference": "Samuel Huron, Romain Vuillemot, and Jean-Daniel Fekete. <i>Visual Sedimentation</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 12, pp. 2446-2455, 2013.",
	    "url": "https://doi.org/10.1109/TVCG.2013.227",
		"categories":["event-analysis", "roi", "classification", "monitoring", "overview", "streams", "time-series", "2d", "pixel-area", "glyph", "radial", "linear", "metric"]
	},

	{
	    "id": "Gao2014",
	    "title": "NewsViews",
	    "year": 2014,
		"authors": "Tong Gao et al.",
	    "reference": "Tong Gao, Jessica Hullman, Eytan Adar, Brent Hecht, and Nicholas Diakopoulos. <i>NewsViews: An Automated Pipeline for Creating Custom Geovisualizations for News</i>. Proceedings of ACM SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 3005-3014, 2014.",
	    "url": "https://doi.org/10.1145/2556288.2557228",
	    "categories": ["text-summarization", "trend-analysis", "roi", "overview", "navigation", "corpora", "geospatial", "editorial-media", "2d", "maps", "text"]
	},

	{
	    "id": "Hullman2013",
	    "title": "Contextifier",
	    "year": 2013,
		"authors": "Jessica Hullman, Nicholas Diakopoulos, and Eytan Adar",
		"reference": "Jessica Hullman, Nicholas Diakopoulos, and Eytan Adar. <i>Automatic Generation of Annotated Stock Visualizations</i>. Proceedings of ACM SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 2707-2716, 2013.",
		"url": "https://doi.org/10.1145/2470654.2481374",
	    "categories": ["text-summarization", "trend-analysis", "roi", "overview", "corpora", "time-series", "editorial-media", "2d", "line-plot", "text"]
	},

	{
		"id": "Rooney2014",
		"title": "INVISQUE",
		"year": 2014,
	    "authors": "Chris Rooney et al.",
	    "reference": "Chris Rooney, Simon Attfield, William Wong, and Tinni Choudhury. <i>INVISQUE as a Tool for Intelligence Analysis: The Construction of Explanatory Narratives</i>. International Journal of Human-Computer Interaction, vol. 30, no. 9, pp. 703-717, 2014",
	    "url": "https://doi.org/10.1080/10447318.2014.905422",
	    "categories": ["relation-analysis", "overview", "navigation", "classification", "corpora", "time-series", "editorial-media", "2d", "text", "glyph", "linear"]
	},

	{
		"id": "Hilpert2011",
		"title": "Linguistic Motion Charts",
		"year": 2011,
		"authors": "Martin Hilpert",
		"reference": "Martin Hilpert. <i>Dynamic visualizations of language change: Motion charts on the basis of bivariate and multivariate data from diachronic corpora</i>. International Journal of Corpus Linguistics, vol. 16, no. 4, pp 435–461, 2011.",
		"url": "https://doi.org/10.1075/ijcl.16.4.01hil",
		"categories": ["text-summarization", "lexical-analysis", "trend-analysis", "overview", "comparison", "roi", "corpora", "time-series", "literature", "editorial-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Duan2012",
		"title": "VISA",
		"year": 2012,
		"authors": "Dongxu Duan et al.",
		"reference": "Dongxu Duan, Weihong Qian, Shimei Pan, Lei Shi, and Chuang Lin. <i>VISA: A Visual Sentiment Analysis System</i>. Proceedings of the 5th International Symposium on Visual Information Communication and Interaction (VINCI), pp. 22-28, 2012.",
		"url": "https://doi.org/10.1145/2397696.2397700",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "2d", "line-plot", "pixel-area", "text", "clouds", "metric", "radial"]
	},

	{
		"id": "Liu2009",
		"title": "TIARA",
		"year": 2009,
		"authors": "Shixia Liu et al.",
		"reference": "Shixia Liu, Michelle X. Zhou, Shimei Pan, Weihong Qian, Weijia Cai, and Xiaoxiao Lian. <i>Interactive, Topic-based Visual Text Summarization and Analysis</i>. Proceedings of the 18th ACM Conference on Information and Knowledge Management (CIKM), pp. 543-552, 2009.",
		"url": "https://doi.org/10.1145/1645953.1646023",
		"categories": ["text-summarization", "trend-analysis", "overview", "navigation", "classification", "comparison", "corpora", "time-series", "2d", "line-plot", "clouds", "text", "metric"]
	},

	{
		"id": "Gali2012",
		"title": "Money Trees",
		"year": 2012,
		"authors": "Guia Gali et al.",
		"reference": "Guia Gali, Symon Oliver, Fanny Chevalier, and Sara Diamond. <i>Visualizing Sentiments in Business-customer Relations with Metaphors</i>. CHI '12 Extended Abstracts on Human Factors in Computing Systems, pp. 1493-1498, 2012.",
		"url": "https://doi.org/10.1145/2212776.2223661",
		"categories": ["trend-analysis", "sentiment-analysis", "monitoring", "overview", "classification", "comparison", "corpora", "time-series", "reviews", "2d", "glyph", "linear"]
	},

	{
		"id": "Gali2012_2",
		"title": "Emotional Tapestry",
		"year": 2012,
		"authors": "Guia Gali et al.",
		"reference": "Guia Gali, Symon Oliver, Fanny Chevalier, and Sara Diamond. <i>Visualizing Sentiments in Business-customer Relations with Metaphors</i>. CHI '12 Extended Abstracts on Human Factors in Computing Systems, pp. 1493-1498, 2012.",
		"url": "https://doi.org/10.1145/2212776.2223661",
		"categories": ["trend-analysis", "sentiment-analysis", "monitoring", "overview", "classification", "comparison", "corpora", "time-series", "reviews", "2d", "glyph", "pixel-area", "linear"]
	},

	{
		"id": "Gali2012_3",
		"title": "SentiWheel",
		"year": 2012,
		"authors": "Guia Gali et al.",
		"reference": "Guia Gali, Symon Oliver, Fanny Chevalier, and Sara Diamond. <i>Visualizing Sentiments in Business-customer Relations with Metaphors</i>. CHI '12 Extended Abstracts on Human Factors in Computing Systems, pp. 1493-1498, 2012.",
		"url": "https://doi.org/10.1145/2212776.2223661",
		"categories": ["trend-analysis", "relation-analysis", "sentiment-analysis", "monitoring", "overview", "classification", "comparison", "corpora", "time-series", "reviews", "2d", "pixel-area", "node-link", "radial"]
	},

	{
		"id": "Almutairi2013",
		"title": "Attitude Radial Plots",
		"year": 2013,
		"authors": "Bandar Alhumaidi A. Almutairi",
		"reference": "Bandar Alhumaidi A. Almutairi. <i>Visualizing patterns of appraisal in texts and corpora</i>. Text & Talk, vol. 33, no. 4-5, pp. 691–723, 2013.",
		"url": "https://doi.org/10.1515/text-2013-0031",
		"categories": ["discourse-analysis", "sentiment-analysis", "stance-analysis", "trend-analysis", "overview", "classification", "comparison", "document", "editorial-media", "2d", "3d", "pixel-area", "maps", "metric"]
	},

	{
		"id": "Koch2014",
		"title": "VarifocalReader",
		"year": 2014,
		"authors": "Steffen Koch et al.",
		"reference": "Steffen Koch, Markus John, Michael Wörner, Andreas Müller, and Thomas Ertl. <i>VarifocalReader – In-Depth Visual Analysis of Large Text Documents</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 1723-1732, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346677",
		"categories": ["text-summarization", "translation-analysis", "relation-analysis", "roi", "classification", "comparison", "overview", "navigation", "document", "literature", "2d", "line-plot", "clouds", "text", "linear"]
	},

	{
		"id": "Brehmer2014",
		"title": "Overview",
		"year": 2014,
		"authors": "Matthew Brehmer et al.",
		"reference": "Matthew Brehmer, Stephen Ingram, Jonathan Stray, and Tamara Munzner. <i>Overview: The Design, Adoption, and Analysis of a Visual Document Mining Tool for Investigative Journalists</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 2271-2280, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346431",
		"categories": ["text-summarization", "relation-analysis", "classification", "overview", "comparison", "navigation", "corpora", "communication", "editorial-media", "2d", "node-link", "text", "glyph", "linear"]
	},

	{
		"id": "Cui2014",
		"title": "RoseRiver",
		"year": 2014,
		"authors": "Weiwei Cui et al.",
		"reference": "Weiwei Cui, Shixia Liu, Zhuofeng Wu, and Hao Wei. <i>How Hierarchical Topics Evolve in Large Text Corpora</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 2281-2290, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346433",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "classification", "comparison", "roi", "corpora", "time-series", "social-media", "2d", "line-plot", "glyph", "clouds", "metric"]
	},

	{
		"id": "Liu2014",
		"title": "TopicPanorama",
		"year": 2014,
		"authors": "Shixia Liu et al.",
		"reference": "Shixia Liu, Xiting Wang, Jianfei Chen, Jun Zhu, and Baining Guo. <i>TopicPanorama: a Full Picture of Relevant Topics</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 183-192, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042494",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "social-media", "editorial-media", "2d", "node-link", "pixel-area", "clouds", "glyph", "radial", "metric"]
	},

	{
		"id": "Zhao2014",
		"title": "FluxFlow",
		"year": 2014,
		"authors": "Jian Zhao et al.",
		"reference": "Jian Zhao, Nan Cao, Zhen Wen, Yale Song, Yu-Ru Lin, and Christopher Collins. <i>#FluxFlow: Visual Analysis of Anomalous Information Spreading on Social Media</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 1773-1782, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346922",
		"categories": ["trend-analysis", "sentiment-analysis", "relation-analysis", "overview", "monitoring", "classification", "comparison", "navigation", "roi", "streams", "time-series", "social-media", "2d", "glyph", "clouds", "pixel-area", "node-link", "radial", "metric", "linear"]
	},

	{
		"id": "Bradel2014",
		"title": "StarSPIRE",
		"year": 2014,
		"authors": "Lauren Bradel et al.",
		"reference": "Lauren Bradel, Chris North, Leanna House, and Scotland Leman. <i>Multi-Model Semantic Interaction for Text Analytics</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 163-172, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042492",
		"categories": ["text-summarization", "relation-analysis", "overview", "roi", "navigation", "corpora", "2d", "clouds", "node-link", "metric"]
	},

	{
		"id": "Gomez-Nieto2014",
		"title": "ProjSnippet",
		"year": 2014,
		"authors": "Erick Gomez-Nieto et al.",
		"reference": "Erick Gomez-Nieto, Frizzi San Roman, Paulo Pagliosa, Wallace Casaca, Elias S. Helou, Maria Cristina F. de Oliveira, and Luis Gustavo Nonato. <i>Similarity Preserving Snippet-Based Visualization of Web Search Results</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 3, pp. 457-470, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2013.242",
		"categories": ["text-summarization", "overview", "classification", "navigation", "corpora", "2d", "clouds", "text", "metric"]
	},

	{
		"id": "Isaacs2014",
		"title": "Footprints",
		"year": 2014,
		"authors": "Ellen Isaacs et al.",
		"reference": "Ellen Isaacs, Kelly Domico, Shane Ahern, Eugene Bart, and Mudita Singhal. <i>Footprints: A Visual Search Tool that Supports Discovery and Coverage Tracking</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 1793-1802, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346743",
		"categories": ["text-summarization", "overview", "roi", "classification", "navigation", "corpora", "editorial-media", "2d", "glyph", "clouds", "line-plot", "text", "metric", "linear"]
	},

	{
		"id": "Lu2014",
		"title": "Tweet Bubble Plot",
		"year": 2014,
		"authors": "Yafeng Lu et al.",
		"reference": "Yafeng Lu, Robert Krüger, Dennis Thom, Feng Wang, Steffen Koch, Thomas Ertl, and Ross Maciejewski. <i>Integrating Predictive Analytics and Social Media</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 193-202, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042495",
		"categories": ["sentiment-analysis", "trend-analysis", "roi", "classification", "comparison", "corpora", "time-series", "social-media", "2d", "clouds", "glyph", "linear"]
	},

	{
		"id": "Sun2014",
		"title": "EvoRiver",
		"year": 2014,
		"authors": "Guodao Sun et al.",
		"reference": "Guodao Sun, Yingcai Wu, Shixia Liu, Tai-Quan Peng, Jonathan J. H. Zhu, and Ronghua Liang. <i>EvoRiver: Visual Analysis of Topic Coopetition on Social Media</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 1753-1762, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346919",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "classification", "comparison", "overview", "roi", "corpora", "time-series", "social-media", "2d", "line-plot", "clouds", "metric"]
	},

	{
		"id": "Wu2014",
		"title": "OpinionFlow",
		"year": 2014,
		"authors": "Yingcai Wu et al.",
		"reference": "Yingcai Wu, Shixia Liu, Kai Yan, Mengchen Liu, and Fangzhao Wu. <i>OpinionFlow: Visual Analysis of Opinion Diffusion on Social Media</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 20, no. 12, pp. 1763-1772, 2014.",
		"url": "https://doi.org/10.1109/TVCG.2014.2346920",
		"categories": ["text-summarization", "trend-analysis", "sentiment-analysis", "overview", "comparison", "classification", "corpora", "time-series", "social-media", "2d", "line-plot", "node-link", "maps", "clouds", "metric"]
	},

	{
		"id": "Cao2012",
		"title": "Whisper",
		"year": 2012,
		"authors": "Nan Cao et al.",
		"reference": "Nan Cao, Yu-Ru Lin, Xiaohua Sun, David Lazer, Shixia Liu, and Huamin Qu. <i>Whisper: Tracing the Spatiotemporal Process of Information Diffusion in Real Time</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 12, pp. 2649-2658, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2012.291",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "event-analysis", "monitoring", "overview", "classification", "comparison", "navigation", "streams", "geospatial", "time-series", "social-media", "2d", "line-plot", "node-link", "maps", "glyph", "clouds", "text", "radial", "linear"]
	},

	{
		"id": "Wang2015",
		"title": "SentiCompass",
		"year": 2015,
		"authors": "Florence Ying Wang et al.",
		"reference": "Florence Ying Wang, Arnaud Sallaberry, Karsten Klein, Masahiro Takatsuka, and Mathieu Roche. <i>SentiCompass: Interactive visualization for exploring and comparing the sentiments of time-varying Twitter data</i>. Proceedings of the IEEE Pacific Visualization Symposium (PacificVis), pp. 129-133, 2015.",
		"url": "https://doi.org/10.1109/PACIFICVIS.2015.7156368",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "corpora", "time-series", "social-media", "2d", "line-plot", "linear", "radial"]
	},

	{
		"id": "Chen2014",
		"title": "Emoticons Usage Visualization",
		"year": 2014,
		"authors": "Nan-Chen Chen et al.",
		"reference": "Nan-Chen Chen, Laurie Beth Feldman, Judith F. Kroll, and Cecilia R. Aragon. <i>Emoticons and Linguistic Alignment: How Visual Analytics Can Elicit Storytelling</i>. Poster Abstracts of IEEE VAST, pp. 237-238, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042508",
		"categories": ["sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "corpora", "time-series", "communication", "2d", "line-plot", "linear"]
	},

	{
		"id": "Ha2014",
		"title": "CosMovis",
		"year": 2014,
		"authors": "Hyoji Ha et al.",
		"reference": "Hyoji Ha, Gi-nam Kim, Wonjoo Hwang, Hanmin Choi, and Kyungwon Lee. <i>CosMovis: Analyzing Semantic Network of Sentiment Words in Movie Reviews</i>. Poster Abstracts of IEEE LDAV, pp. 113-114, 2014.",
		"url": "https://doi.org/10.1109/LDAV.2014.7013215",
		"categories": ["sentiment-analysis", "relation-analysis", "overview", "classification", "comparison", "corpora", "reviews", "2d", "clouds", "maps", "metric"]
	},

	{
		"id": "Zhao2014_2",
		"title": "PEARL",
		"year": 2014,
		"authors": "Jian Zhao et al.",
		"reference": "Jian Zhao, Liang Gou, Fei Wang, and Michelle Zhou. <i>PEARL: An Interactive Visual Analytic Tool for Understanding Personal Emotion Style Derived from Social Media</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 203-212, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042496",
		"categories": ["sentiment-analysis", "trend-analysis", "text-summarization", "overview", "classification", "roi", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "clouds", "text", "glyph", "linear", "metric"]
	},

	{
		"id": "Etiene2014",
		"title": "Linea",
		"year": 2014,
		"authors": "Tiago Etiene, Paulo Pagliosa, and Luis Gustavo Nonato",
		"reference": "Tiago Etiene, Paulo Pagliosa, and Luis Gustavo Nonato. <i>Linea: Tailoring Timelines by Visual Exploration of Temporal Text</i>. Poster Abstracts of IEEE VAST, pp. 247-248, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042513",
		"categories": ["event-analysis", "text-summarization", "trend-analysis", "overview", "navigation", "roi", "comparison", "document", "corpora", "time-series", "editorial-media", "2d", "text", "line-plot", "clouds", "pixel-area", "linear"]
	},

	{
		"id": "Belmonte2014",
		"title": "#SOTU Visualization",
		"year": 2014,
		"authors": "Nicolas Garcia Belmonte",
		"reference": "Nicolas Garcia Belmonte. <i>Extracting and Visualizing Insights from Real-Time Conversations Around Public Presentations</i>. Poster Abstracts of IEEE VAST, pp. 225-226, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042502",
		"categories": ["text-summarization", "trend-analysis", "overview", "navigation", "comparison", "classification", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "text", "maps", "linear", "metric"]
	},

	{
		"id": "Akyigit2014",
		"title": "Semi-automatic Storyline Generation",
		"year": 2014,
		"authors": "Erk Ediz Akyiğit et al.",
		"reference": "Erk Ediz Akyiğit, Tuğkan Cengiz, Onur Burak Yıldırım, and Selim Balcisoy. <i>Visual Exploratory Tool for Storyline Generation</i>. Poster Abstracts of IEEE VAST, pp. 215-216, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042497",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "document", "literature", "2d", "line-plot", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Koven2014",
		"title": "I-VEST",
		"year": 2014,
		"authors": "Jay Koven et al.",
		"reference": "Jay Koven, Enrico Bertini, Nasir Memon, and R. Luke Dubois. <i>I-VEST: Intelligent Visual Email Search and Triage</i>. Poster Abstracts of IEEE VAST, pp. 257-258, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042518",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "communication", "2d", "text", "line-plot", "node-link", "linear"]
	},

	{
		"id": "Serim2014",
		"title": "mailVis",
		"year": 2014,
		"authors": "Barış Serim et al.",
		"reference": "Barış Serim, Thanh Tung Vuong, Tuukka Ruotsalo, Luana Micallef, and Giulio Jacucci. <i>mailVis: Visualizing Emailbox for Re-finding Emails</i>. Poster Abstracts of IEEE VAST, pp. 275-276, 2014.",
		"url": "https://doi.org/10.1109/VAST.2014.7042527",
		"categories": ["text-summarization", "overview", "classification", "navigation", "corpora", "time-series", "communication", "2d", "text", "glyph", "linear"]
	},

	{
		"id": "Kucher2016",
		"title": "uVSAT",
		"year": 2016,
		"authors": "Kostiantyn Kucher et al.",
		"reference": "Kostiantyn Kucher, Teri Schamp-Bjerede, Andreas Kerren, Carita Paradis, and Magnus Sahlgren. <i>Visual analysis of online social media to open up the investigation of stance phenomena</i>. Information Visualization, vol. 15, no. 2, pp. 93-116, 2016.",
		"url": "https://doi.org/10.1177/1473871615575079",
		"categories": ["text-summarization", "stance-analysis", "sentiment-analysis", "trend-analysis", "roi", "classification", "comparison", "overview", "navigation", "document", "corpora", "streams", "time-series", "social-media", "2d", "line-plot", "node-link", "clouds", "text", "glyph", "linear", "metric"]
	},

	{
		"id": "Burch2014",
		"title": "RadCloud",
		"year": 2014,
		"authors": "Michael Burch et al.",
		"reference": "Michael Burch, Steffen Lohmann, Fabian Beck, Nils Rodriguez, Lorenzo Di Silvestro, and Daniel Weiskopf. <i>RadCloud: Visualizing Multiple Texts with Merged Word Clouds</i>. Proceedings of the  International Conference on Information Visualisation (IV), pp. 108-113, 2014.",
		"url": "https://doi.org/10.1109/IV.2014.72",
		"categories": ["text-summarization", "overview", "classification", "corpora", "2d", "pixel-area", "clouds", "text", "metric"]
	},

	{
		"id": "Kraft2013",
		"title": "Geo and Temporal Association Creator",
		"year": 2013,
		"authors": "Thomas Kraft et al.",
		"reference": "Thomas Kraft, Derek X. Wang, Jeffrey Delawder, Wenwen Dou, Li Yu, and William Ribarsky. <i>Less After-the-Fact: Investigative Visual Analysis of Events from Streaming Twitter</i>. Proceedings of the IEEE Symposium on Large-Scale Data Analysis and Visualization (LDAV), pp. 95-103, 2013.",
		"url": "https://doi.org/10.1109/LDAV.2013.6675163",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "relation-analysis", "roi", "overview", "monitoring", "navigation", "streams", "geospatial", "time-series", "social-media", "2d", "3d", "line-plot", "pixel-area", "maps", "text", "linear", "metric"]
	},

	{
		"id": "MacEachren2011",
		"title": "SensePlace2",
		"year": 2011,
		"authors": "Alan M. MacEachren et al.",
		"reference": "Alan M. MacEachren, Anuj Jaiswal, Anthony C. Robinson, Scott Pezanowski, Alexander Savelyev, Prasenjit Mitra, Xiao Zhang, and Justine Blanford. <i>SensePlace2: GeoTwitter analytics support for situational awareness</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 181-190, 2011.",
		"url": "https://doi.org/10.1109/VAST.2011.6102456",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "roi", "monitoring", "overview", "navigation", "streams", "geospatial", "time-series", "social-media", "2d", "pixel-area", "maps", "text", "linear", "metric"]
	},

	{
		"id": "Guzman2013",
		"title": "Software Development Projects Emotions Visualization",
		"year": 2013,
		"authors": "Emitza Guzman",
		"reference": "Emitza Guzman. <i>Visualizing emotions in software development projects</i>. Proceedings of the First IEEE Working Conference on Software Visualization (VISSOFT), pp. 1-4, 2013.",
		"url": "https://doi.org/10.1109/VISSOFT.2013.6650529",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "comparison", "navigation", "classification", "corpora", "time-series", "communication", "reviews", "2d", "clouds", "text", "linear"]
	},

	{
		"id": "Guzman2014",
		"title": "FAVe",
		"year": 2014,
		"authors": "Emitza Guzman, Padma Bhuvanagiri, and Bernd Bruegge",
		"reference": "Emitza Guzman, Padma Bhuvanagiri, and Bernd Bruegge. <i>FAVe: Visualizing User Feedback for Software Evolution</i>. Proceedings of the Second IEEE Working Conference on Software Visualization (VISSOFT), pp. 167-171, 2014.",
		"url": "https://doi.org/10.1109/VISSOFT.2014.33",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "comparison", "navigation", "classification", "corpora", "time-series", "reviews", "2d", "line-plot", "clouds", "pixel-area", "linear", "radial"]
	},

	{
		"id": "Chuang2012_2",
		"title": "Termite",
		"year": 2012,
		"authors": "Jason Chuang, Christopher D. Manning, and Jeffrey Heer",
		"reference": "Jason Chuang, Christopher D. Manning, and Jeffrey Heer. <i>Termite: Visualization Techniques for Assessing Textual Topic Models</i>. Proceedings of the International Working Conference on Advanced Visual Interfaces (AVI), pp. 74-77, 2012.",
		"url": "https://doi.org/10.1145/2254556.2254572",
		"categories": ["text-summarization", "overview", "comparison", "navigation", "classification", "document", "corpora", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Wang2012",
		"title": "I-SI",
		"year": 2012,
		"authors": "Xiaoyu Wang et al.",
		"reference": "Xiaoyu Wang, Wenwen Dou, Zhiqiang Ma, Jeremy Villalobos, Yang Chen, Thomas Kraft, and William Ribarsky. <i>I-SI: Scalable Architecture for Analyzing Latent Topical-Level Information From Social Media Data</i>. Computer Graphics Forum, vol. 31, no. 3pt4, pp. 1275–1284, 2012.",
		"url": "https://doi.org/10.1111/j.1467-8659.2012.03120.x",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "classification", "comparison", "overview", "monitoring", "corpora", "time-series", "social-media", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Jankowska2012",
		"title": "Relative N-Gram Signatures",
		"year": 2012,
		"authors": "Magdalena Jankowska, Vlado Kešelj, and Evangelos Milios",
		"reference": "Magdalena Jankowska, Vlado Kešelj, and Evangelos Milios. <i>Relative N-gram signatures: Document visualization at the level of character N-grams</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 103-112, 2012.",
		"url": "https://doi.org/10.1109/VAST.2012.6400484",
		"categories": ["text-summarization", "relation-analysis", "lexical-analysis", "classification", "overview", "comparison", "corpora", "literature", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Hearst1995",
		"title": "TileBars",
		"year": 1995,
		"authors": "Marti A. Hearst",
		"reference": "Marti A. Hearst. <i>TileBars: Visualization of Term Distribution Information in Full Text Information Access</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 59-66, 1995.",
		"url": "https://doi.org/10.1145/223904.223912",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "classification", "overview", "comparison", "navigation", "corpora", "document", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Hearst1997",
		"title": "Cat-a-Cone",
		"year": 1997,
		"authors": "Marti A. Hearst and Chandu Karadi",
		"reference": "Marti A. Hearst and Chandu Karadi. <i>Cat-a-Cone: An Interactive Interface for Specifying Searches and Viewing Retrieval Results Using a Large Category Hierarchy</i>. Proceedings of the Annual International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR), pp. 246-255, 1997.",
		"url": "https://doi.org/10.1145/258525.258582",
		"categories": ["text-summarization", "relation-analysis", "classification", "overview", "comparison", "navigation", "corpora", "document", "2d", "3d", "node-link", "text", "radial"]
	},

	{
		"id": "Miller1998_1",
		"title": "Multiresolution Levels Strip Chart",
		"year": 1998,
		"authors": "Nancy E. Miller et al.",
		"reference": "Nancy E. Miller, Pak Chung Wong, Mary Brewster, and Harlan Foote. <i>TOPIC ISLANDS TM - a wavelet-based text visualization system</i>. Proceedings of IEEE Visualization '98, pp. 189-196, 1998.",
		"url": "https://doi.org/10.1109/VISUAL.1998.745302",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "roi", "navigation", "document", "2d", "line-plot", "linear"]
	},

	{
		"id": "Miller1998_2",
		"title": "Multiresolution Levels Wave Chart",
		"year": 1998,
		"authors": "Nancy E. Miller et al.",
		"reference": "Nancy E. Miller, Pak Chung Wong, Mary Brewster, and Harlan Foote. <i>TOPIC ISLANDS TM - a wavelet-based text visualization system</i>. Proceedings of IEEE Visualization '98, pp. 189-196, 1998.",
		"url": "https://doi.org/10.1109/VISUAL.1998.745302",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "roi", "document", "3d", "maps", "linear"]
	},

	{
		"id": "Miller1998_3",
		"title": "Topic Islands",
		"year": 1998,
		"authors": "Nancy E. Miller et al.",
		"reference": "Nancy E. Miller, Pak Chung Wong, Mary Brewster, and Harlan Foote. <i>TOPIC ISLANDS TM - a wavelet-based text visualization system</i>. Proceedings of IEEE Visualization '98, pp. 189-196, 1998.",
		"url": "https://doi.org/10.1109/VISUAL.1998.745302",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "roi", "document", "3d", "maps", "glyph", "linear"]
	},

	{
		"id": "Rohrer1998",
		"title": "Concept Shapes",
		"year": 1998,
		"authors": "Randall M. Rohrer, David S. Ebert, and John L. Sibert",
		"reference": "Randall M. Rohrer, David S. Ebert, and John L. Sibert. <i>The shape of Shakespeare: visualizing text using implicit surfaces</i>. Proceedings of IEEE Symposium on Information Visualization, pp. 121-129, 160, 1998.",
		"url": "https://doi.org/10.1109/INFVIS.1998.729568",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "literature", "3d", "pixel-area", "glyph", "metric"]
	},

	{
		"id": "Sebrechts1999",
		"title": "NIRVE",
		"year": 1999,
		"authors": "Marc M. Sebrechts et al.",
		"reference": "Marc M. Sebrechts, John V. Cugini, Sharon J. Laskowski, Joanna Vasilakis, and Michael S. Miller. <i>Visualization of Search Results: A Comparative Evaluation of Text, 2D, and 3D Interfaces</i>. Proceedings of the Annual International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR), pp. 3-10, 1999.",
		"url": "https://doi.org/10.1145/312624.312634",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "2d", "3d", "pixel-area", "glyph", "node-link", "text", "maps", "metric", "linear"]
	},

	{
		"id": "Liu2005",
		"title": "Opinion Observer",
		"year": 2005,
		"authors": "Bing Liu, Minqing Hu, and Junsheng Cheng",
		"reference": "Bing Liu, Minqing Hu, and Junsheng Cheng. <i>Opinion Observer: Analyzing and Comparing Opinions on the Web</i>. Proceedings of the International Conference on World Wide Web (WWW), pp. 342-351, 2005.",
		"url": "https://doi.org/10.1145/1060745.1060797",
		"categories": ["sentiment-analysis", "classification", "comparison", "navigation", "corpora", "reviews", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Wright2006",
		"title": "Sandbox",
		"year": 2006,
		"authors": "William Wright et al.",
		"reference": "William Wright, David Schroh, Pascale Proulx, Alex Skaburskis, and Brian Cort. <i>The Sandbox for Analysis: Concepts and Methods</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 801-810, 2006.",
		"url": "https://doi.org/10.1145/1124772.1124890",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "2d", "text", "node-link", "metric"]
	},

	{
		"id": "Gamon2008",
		"title": "BLEWS",
		"year": 2008,
		"authors": "Michael Gamon et al.",
		"reference": "Michael Gamon, Sumit Basu, Dmitriy Belenko, Danyel Fisher, Matthew Hurst, and Arnd Christian König. <i>BLEWS: Using Blogs to Provide Context for News Articles</i>. Proceedings of the International Conference on Weblogs and Social Media (ICWSM), pp. 60-67, 2008.",
		"url": "http://www.aaai.org/Library/ICWSM/2008/icwsm08-015.php",
		"categories": ["sentiment-analysis", "classification", "comparison", "navigation", "uncertainty", "corpora", "social-media", "editorial-media", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Butt2014",
		"title": "V1 Declaratives Visualization",
		"year": 2014,
		"authors": "Miriam Butt et al.",
		"reference": "Miriam Butt, Tina Bögel, Kristina Kotcheva, Christin Schätzle, Christian Rohrdantz, Dominik Sacha, Nicole Dehe, and Daniel A. Keim. <i>V1 in Icelandic: A multifactorical visualization of historical data</i>. Proceedings of the LREC 2014 Workshop VisLR: Visualization as added value in the development, use and evaluation of Language Resources, pp. 33-40, 2014.",
		"url": "http://webservices.eurac.edu/vislr.html",
		"categories": ["lexical-analysis", "overview", "comparison", "navigation", "document", "corpora", "time-series", "literature", "2d", "glyph", "pixel-area", "linear"]
	},

	{
		"id": "Mayer2014",
		"title": "CLICS",
		"year": 2014,
		"authors": "Thomas Mayer et al.",
		"reference": "Thomas Mayer, Johann-Mattis List, Anselm Terhalle, and Matthias Urban. <i>An Interactive Visualization of Crosslinguistic Colexification Patterns</i>. Proceedings of the LREC 2014 Workshop VisLR: Visualization as added value in the development, use and evaluation of Language Resources, pp. 1-8, 2014.",
		"url": "http://webservices.eurac.edu/vislr.html",
		"categories": ["lexical-analysis", "translation-analysis", "relation-analysis", "classification", "overview", "comparison", "navigation", "corpora", "networks", "geospatial", "literature", "2d", "text", "pixel-area", "node-link", "maps", "metric"]
	},

	{
		"id": "Theron2014",
		"title": "dbo@ema",
		"year": 2014,
		"authors": "Roberto Theron and Eveline Wandl-Vogt",
		"reference": "Roberto Theron and Eveline Wandl-Vogt. <i>The Fun of Exploration: How to Access a Non-Standard Language Corpus Visually</i>. Proceedings of the LREC 2014 Workshop VisLR: Visualization as added value in the development, use and evaluation of Language Resources, pp. 9-12, 2014.",
		"url": "http://webservices.eurac.edu/vislr.html",
		"categories": ["lexical-analysis", "relation-analysis", "overview", "comparison", "navigation", "corpora", "geospatial", "literature", "2d", "text", "line-plot", "glyph", "maps", "linear"]
	},

	{
		"id": "Gad2015",
		"title": "ThemeDelta",
		"year": 2015,
		"authors": "Samah Gad et al.",
		"reference": "Samah Gad, Waqas Javed, Sohaib Ghani, Niklas Elmqvist, Tom Ewing, Keith N. Hampton, and Naren Ramakrishnan. <i>ThemeDelta: Dynamic Segmentations over Temporal Topic Models</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 21, no. 5, pp. 672-685, 2015.",
		"url": "https://doi.org/10.1109/TVCG.2014.2388208",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "literature", "social-media", "editorial-media", "2d", "text", "line-plot", "linear"]
	},

	{
		"id": "Kempter2014",
		"title": "EmotionWatch",
		"year": 2014,
		"authors": "Renato Kempter et al.",
		"reference": "Renato Kempter, Valentina Sintsova, Claudiu Musat, and Pearl Pu. <i>EmotionWatch: Visualizing Fine-Grained Emotions in Event-Related Tweets</i>. Proceedings of the International AAAI Conference on Weblogs and Social Media (ICWSM), pp. 236-245, 2014.",
		"url": "http://www.aaai.org/ocs/index.php/ICWSM/ICWSM14/paper/view/8117",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "text", "glyph", "line-plot", "pixel-area", "linear"]
	},

	{
		"id": "Wensel2008",
		"title": "VIBES",
		"year": 2008,
		"authors": "April M. Wensel and Sara O. Sood",
		"reference": "April M. Wensel and Sara O. Sood. <i>VIBES: Visualizing Changing Emotional States in Personal Stories</i>. Proceedings of the ACM International Workshop on Story Representation, Mechanism and Context (SRMC), pp. 49-56, 2008.",
		"url": "https://doi.org/10.1145/1462014.1462025",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "classification", "comparison", "corpora", "time-series", "social-media", "2d", "text", "glyph", "line-plot", "radial"]
	},

	{
		"id": "Miao2009",
		"title": "AMAZING",
		"year": 2009,
		"authors": "Qingliang Miao, Qiudan Li, and Ruwei Dai",
		"reference": "Qingliang Miao, Qiudan Li, and Ruwei Dai. <i>AMAZING: A sentiment mining and retrieval system</i>. Expert Systems with Applications, vol. 36, no. 3, pp. 7192-7198, 2009.",
		"url": "https://doi.org/10.1016/j.eswa.2008.09.035",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "navigation", "corpora", "time-series", "reviews", "2d", "text", "line-plot", "pixel-area", "linear", "radial"]
	},

	{
		"id": "Diakopoulos2010",
		"title": "Vox Civitas",
		"year": 2010,
		"authors": "Nicholas Diakopoulos, Mor Naaman, and Funda Kivran-Swaine",
		"reference": "Nicholas Diakopoulos, Mor Naaman, and Funda Kivran-Swaine. <i>Diamonds in the rough: Social media visual analytics for journalistic inquiry</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 115-122, 2010.",
		"url": "https://doi.org/10.1109/VAST.2010.5652922",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "time-series", "social-media", "2d", "text", "clouds", "line-plot", "pixel-area", "linear"]
	},

	{
		"id": "Dork2010",
		"title": "Visual Backchannel",
		"year": 2010,
		"authors": "Marian Dörk et al.",
		"reference": "Marian Dörk, Daniel Gruen, Carey Williamson, and Sheelagh Carpendale. <i>A Visual Backchannel for Large-Scale Events</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 16, no.6, pp. 1129-1138, 2010.",
		"url": "https://doi.org/10.1109/TVCG.2010.129",
		"categories": ["text-summarization", "trend-analysis", "overview", "monitoring", "classification", "comparison", "navigation", "streams", "time-series", "social-media", "2d", "text", "line-plot", "glyph", "clouds", "linear", "radial"]
	},

	{
		"id": "Spangler2010",
		"title": "SIMPLE",
		"year": 2010,
		"authors": "Scott Spangler et al.",
		"reference": "Scott Spangler, Ying Chen, Jeffrey Kreulen, Stephen Boyer, Thomas Griffin, Alfredo Alba, Linda Kato, Ana Lelescu, and Su Yan. <i>SIMPLE: Interactive Analytics on Patent Data</i>. Proceedings of the IEEE International Conference on Data Mining Workshops (ICDMW), pp. 426-433, 2010.",
		"url": "https://doi.org/10.1109/ICDMW.2010.188",
		"categories": ["relation-analysis", "overview", "navigation", "comparison", "corpora", "patents", "2d", "clouds", "text", "pixel-area", "metric"]
	},

	{
		"id": "Nualart2013",
		"title": "Texty",
		"year": 2013,
		"authors": "Jaume Nualart and Mario Pérez-Montoro",
		"reference": "Jaume Nualart and Mario Pérez-Montoro. <i>Texty, a visualization tool to aid selection of texts from search outputs</i>. Information Research, vol. 18, no.2, paper 581, 2013.",
		"url": "http://InformationR.net/ir/18-2/paper581.html",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "roi", "classification", "comparison", "overview", "navigation", "document", "papers", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "PerezMontoro2015",
		"title": "Area",
		"year": 2015,
		"authors": "Mario Pérez-Montoro and Jaume Nualart",
		"reference": "Mario Pérez-Montoro and Jaume Nualart. <i>Visual articulation of navigation and search systems for digital libraries</i>. International Journal of Information Management, vol. 35, no. 5, pp. 572-579, 2015.",
		"url": "https://doi.org/10.1016/j.ijinfomgt.2015.06.005",
		"categories": ["overview", "navigation", "corpora", "papers", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Alper2011",
		"title": "OpinionBlocks",
		"year": 2011,
		"authors": "Basak Alper et al.",
		"reference": "Basak Alper, Huahai Yang, Eben Haber, and Eser Kandogan. <i>OpinionBlocks: Visualizing consumer reviews</i>. Proceedings of the IEEE Workshop on Interactive Visual Text Analytics for Decision Making (TextVis), 2011.",
		"url": "http://vialab.science.uoit.ca/textvis2011/papers/textvis%202011-alper.pdf",
		"categories": ["text-summarization", "sentiment-analysis", "classification", "comparison", "overview", "navigation", "corpora", "reviews", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Sun2011",
		"title": "Tapestry",
		"year": 2011,
		"authors": "Xiaohua Sun",
		"reference": "Xiaohua Sun. <i>Tapestry: Enhancing In-depth Text Analysis at Document Level</i>. Proceedings of the IEEE Workshop on Interactive Visual Text Analytics for Decision Making (TextVis), 2011.",
		"url": "http://vialab.science.uoit.ca/textvis2011/papers/textvis%202011-sun.pdf",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "comparison", "overview", "navigation", "corpora", "time-series", "reviews", "2d", "pixel-area", "clouds", "linear"]
	},

	{
		"id": "Crossno2011",
		"title": "TopicView",
		"year": 2011,
		"authors": "Patricia J. Crossno et al.",
		"reference": "Patricia J. Crossno, Andrew T. Wilson, Timothy M. Shead, and Daniel M. Dunlavy. <i>TopicView: Visually Comparing Topic Models of Text Collections</i>. Proceedings of IEEE International Conference on Tools with Artificial Intelligence (ICTAI), pp. 936-943, 2011.",
		"url": "https://doi.org/10.1109/ICTAI.2011.162",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "classification", "corpora", "networks", "2d", "node-link", "pixel-area", "text", "metric", "linear"]
	},

	{
		"id": "Forbes2011",
		"title": "Tag River",
		"year": 2011,
		"authors": "Angus Graeme Forbes et al.",
		"reference": "Angus Graeme Forbes, Basak Alper, Tobias Höllerer, and George Legrady. <i>Interactive Folksonomic Analytics with the Tag River Visualization</i>. Poster Abstracts of the IEEE Workshop on Interactive Visual Text Analytics for Decision Making (TextVis), 2011.",
		"url": "http://vialab.science.uoit.ca/textvis2011/papers/textvis%202011-forbes.pdf",
		"categories": ["text-summarization", "trend-analysis", "comparison", "overview", "navigation", "corpora", "time-series", "social-media", "2d", "pixel-area", "clouds", "linear", "metric"]
	},

	{
		"id": "Marcus2011",
		"title": "TwitInfo",
		"year": 2011,
		"authors": "Adam Marcus et al.",
		"reference": "Adam Marcus, Michael S. Bernstein, Osama Badar, David R. Karger, Samuel Madden, and Robert C. Miller. <i>TwitInfo: Aggregating and Visualizing Microblogs for Event Exploration</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 227-236, 2011.",
		"url": "https://doi.org/10.1145/1978942.1978975",
		"categories": ["event-analysis", "sentiment-analysis", "trend-analysis", "overview", "monitoring", "navigation", "classification", "comparison", "roi", "streams", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "text", "maps", "linear", "radial"]
	},

	{
		"id": "Forbes2012",
		"title": "Directed Social Queries",
		"year": 2012,
		"authors": "Angus Graeme Forbes, Saiph Savage and Tobias Höllerer",
		"reference": "Angus Graeme Forbes, Saiph Savage and Tobias Höllerer. <i>Visualizing and verifying directed social queries</i>. Proceedings of the IEEE Workshop on Interactive Visual Text Analytics (TextVis), 2012.",
		"url": "http://vialab.science.uoit.ca/textvis2012/paper/Social-Queries.pdf",
		"categories": ["text-summarization", "relation-analysis", "comparison", "overview", "corpora", "networks", "social-media", "2d", "node-link", "clouds", "linear"]
	},

	{
		"id": "Zhao2012",
		"title": "DAViewer",
		"year": 2012,
		"authors": "Jian Zhao et al.",
		"reference": "Jian Zhao, Fanny Chevalier, Christopher Collins, and Ravin Balakrishnan. <i>Facilitating Discourse Analysis with Interactive Visualization</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 12, pp. 2639-2648, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2012.226",
		"categories": ["text-summarization", "discourse-analysis", "relation-analysis", "overview", "comparison", "navigation", "roi", "classification", "corpora", "editorial-media", "2d", "node-link", "pixel-area", "text", "linear", "metric"]
	},

	{
		"id": "Viegas2013",
		"title": "Google+ Ripples",
		"year": 2013,
		"authors": "Fernanda Viégas et al.",
		"reference": "Fernanda Viégas, Martin Wattenberg, Jack Hebert, Geoffrey Borggaard, Alison Cichowlas, Jonathan Feinberg, Jon Orwant, and Christopher Wren. <i>Google+ Ripples: A Native Visualization of Information Flow</i>. Proceedings of the International Conference on World Wide Web (WWW), pp. 1389-1398, 2013.",
		"url": "http://dl.acm.org/citation.cfm?id=2488388.2488504",
		"categories": ["event-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "navigation", "streams", "time-series", "networks", "social-media", "2d", "line-plot", "node-link", "pixel-area", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Brooks2014",
		"title": "Agave",
		"year": 2014,
		"authors": "Michael Brooks et al.",
		"reference": "Michael Brooks, John J. Robinson, Megan K. Torkildson, Sungsoo (Ray) Hong, and Cecilia R. Aragon. <i>Collaborative Visual Analysis of Sentiment in Twitter Events</i>. Proceedings of the International Conference on Cooperative Design, Visualization, and Engineering (CDVE), pp. 1-8, 2014.",
		"url": "https://doi.org/10.1007/978-3-319-10831-5_1",
		"categories": ["event-analysis", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Kumamoto2014",
		"title": "Impressions from Tweets",
		"year": 2014,
		"authors": "Tadahiko Kumamoto, Hitomi Wada, and Tomoya Suzuki",
		"reference": "Tadahiko Kumamoto, Hitomi Wada, and Tomoya Suzuki. <i>Visualizing Temporal Changes in Impressions from Tweets</i>. Proceedings of the International Conference on Information Integration and Web-based Applications & Services (iiWAS), pp. 116-125, 2014.",
		"url": "https://doi.org/10.1145/2684200.2684279",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "text", "linear", "radial"]
	},

	{
		"id": "Liu2015",
		"title": "TextPioneer",
		"year": 2015,
		"authors": "Shixia Liu et al.",
		"reference": "Shixia Liu, Yang Chen, Hao Wei, Jing Yang, Kun Zhou, and Steven M. Drucker. <i>Exploring Topical Lead-Lag across Corpora</i>. IEEE Transactions on Knowledge and Data Engineering, vol. 27, no. 1, pp. 115-129, 2015.",
		"url": "https://doi.org/10.1109/TKDE.2014.2324581",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "navigation", "classification", "comparison", "corpora", "time-series", "networks", "2d", "line-plot", "node-link", "text", "clouds", "linear", "radial", "metric"]
	},

	{
		"id": "Gold2015",
		"title": "Lexical Episode Plots",
		"year": 2015,
		"authors": "Valentin Gold, Christian Rohrdantz and Mennatallah El-Assady",
		"reference": "Valentin Gold, Christian Rohrdantz and Mennatallah El-Assady. <i>Exploratory Text Analysis using Lexical Episode Plots</i>. Short Papers of the Eurographics Conference on Visualization (EuroVis), 2015.",
		"url": "https://doi.org/10.2312/eurovisshort.20151130",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "navigation", "classification", "document", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Riehmann2015",
		"title": "Visual Plagiarism Analysis Tool",
		"year": 2015,
		"authors": "Patrick Riehmann et al.",
		"reference": "Patrick Riehmann, Martin Potthast, Benno Stein, and Bernd Froehlich. <i>Visual Assessment of Alleged Plagiarism Cases</i>. Computer Graphics Forum, vol. 34, no. 3, pp. 61-70, 2015.",
		"url": "https://doi.org/10.1111/cgf.12618",
		"categories": ["relation-analysis", "translation-analysis", "overview", "navigation", "roi", "comparison", "classification", "document", "networks", "papers", "2d", "node-link", "text", "glyph", "linear"]
	},

	{
		"id": "Diakopoulos2015",
		"title": "Compare Clouds",
		"year": 2015,
		"authors": "Nicholas Diakopoulos et al.",
		"reference": "Nicholas Diakopoulos, Dag Elgesem, Andrew Salway, Amy Zhang and Knut Hofland. <i>Compare Clouds: Visualizing Text Corpora to Compare Media Frames</i>. Proceedings of the IUI Workshop on Visual Text Analytics (TextVis), 2015.",
		"url": "http://vialab.science.uoit.ca/textvis2015/papers/Diakopoulos-textvis2015.pdf",
		"categories": ["relation-analysis", "overview", "comparison", "navigation", "corpora", "editorial-media", "social-media", "2d", "clouds", "text", "metric"]
	},

	{
		"id": "Ganesan2015",
		"title": "LDAExplore",
		"year": 2015,
		"authors": "Ashwinkumar Ganesan et al.",
		"reference": "Ashwinkumar Ganesan, Kiante Brantley, Shimei Pan and Jian Chen. <i>LDAExplore: Visualizing Topic Models Generated Using Latent Dirichlet Allocation</i>. Proceedings of the IUI Workshop on Visual Text Analytics (TextVis), 2015.",
		"url": "http://vialab.science.uoit.ca/textvis2015/papers/Ganesan-textvis2015.pdf",
		"categories": ["text-summarization", "overview", "classification", "comparison", "navigation", "corpora", "2d", "line-plot", "pixel-area", "text", "linear", "metric"]
	},

	{
		"id": "Teng2015",
		"title": "LinkScope",
		"year": 2015,
		"authors": "Yun Teng, Tobias Höllerer and John O'Donovan",
		"reference": "Yun Teng, Tobias Höllerer and John O'Donovan. <i>LinkScope: Interactive Graph Analysis of Unstructured Text</i>. Proceedings of the IUI Workshop on Visual Text Analytics (TextVis), 2015.",
		"url": "http://vialab.science.uoit.ca/textvis2015/papers/Teng-textvis2015.pdf",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "corpora", "networks", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "Steed2015",
		"title": "Matisse",
		"year": 2015,
		"authors": "Chad A. Steed et al.",
		"reference": "Chad A. Steed, Justin Beaver, Paul L. Bogen II, Margaret Drouhard and Joshua Pyle. <i>Text Stream Trend Analysis using Multiscale Visual Analytics with Applications to Social Media Systems</i>. Proceedings of the IUI Workshop on Visual Text Analytics (TextVis), 2015.",
		"url": "http://vialab.science.uoit.ca/textvis2015/papers/Steed-textvis2015.pdf",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "classification", "navigation", "comparison", "corpora", "streams", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "text", "clouds", "linear"]
	},

	{
		"id": "Wanner2011",
		"title": "ForAVis",
		"year": 2011,
		"authors": "Franz Wanner, Thomas Ramm, and Daniel A. Keim",
		"reference": "Franz Wanner, Thomas Ramm, and Daniel A. Keim. <i>ForAVis: explorative user forum analysis</i>. Proceedings of the International Conference on Web Intelligence, Mining and Semantics (WIMS), article 14, 2011.",
		"url": "https://doi.org/10.1145/1988688.1988705",
		"categories": ["sentiment-analysis", "relation-analysis", "overview", "navigation", "comparison", "classification", "corpora", "social-media", "2d", "pixel-area", "glyph", "linear"]
	},

	{
		"id": "Adams2011",
		"title": "Eventscapes",
		"year": 2011,
		"authors": "Brett Adams, Dinh Phung, and Svetha Venkatesh",
		"reference": "Brett Adams, Dinh Phung, and Svetha Venkatesh. <i>Eventscapes: visualizing events over time with emotive facets</i>. Proceedings of the ACM international conference on Multimedia (MM), pp. 1477-1480, 2011.",
		"url": "https://doi.org/10.1145/2072298.2072044",
		"categories": ["sentiment-analysis", "text-summarization", "event-analysis", "overview", "classification", "navigation", "comparison", "corpora", "social-media", "editorial-media", "time-series", "2d", "clouds", "text", "linear"]
	},

	{
		"id": "Scharl2012",
		"title": "webLyzard",
		"year": 2012,
		"authors": "Arno Scharl et al.",
		"reference": "Arno Scharl, Alexander Hubmann-Haidvogel, Albert Weichselbraun, Gerhard Wohlgenannt, Heinz-Peter Lang, and Marta Sabou. <i>Extraction and interactive exploration of knowledge from aggregated news and social media content</i>. Proceedings of the ACM SIGCHI symposium on Engineering interactive computing systems (EICS), pp. 163-168, 2012.",
		"url": "https://doi.org/10.1145/2305484.2305511",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "classification", "navigation", "comparison", "roi", "monitoring", "corpora", "streams", "time-series", "geospatial", "social-media", "editorial-media", "2d", "line-plot", "maps", "text", "clouds", "linear", "metric"]
	},

	{
		"id": "Xu2011",
		"title": "Comparative Relation Map",
		"year": 2011,
		"authors": "Kaiquan Xu et al.",
		"reference": "Kaiquan Xu, Stephen Shaoyi Liao, Jiexun Li, and Yuxia Song. <i>Mining comparative opinions from customer reviews for Competitive Intelligence</i>. Decision Support Systems, vol. 50, no. 4, pp. 743-754, 2011.",
		"url": "https://doi.org/10.1016/j.dss.2010.08.021",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "overview", "comparison", "classification", "corpora", "networks", "reviews", "2d", "node-link", "pixel-area", "linear"]
	},

	{
		"id": "Gamon2005",
		"title": "Pulse",
		"year": 2005,
		"authors": "Michael Gamon et al.",
		"reference": "Michael Gamon, Anthony Aue, Simon Corston-Oliver, and Eric Ringger. <i>Pulse: Mining Customer Opinions from Free Text</i>. Proceedings of International Symposium on Intelligent Data Analysis (IDA), pp. 121-132, 2005.",
		"url": "https://doi.org/10.1007/11552253_12",
		"categories": ["text-summarization", "sentiment-analysis", "classification", "navigation", "corpora", "reviews", "2d", "pixel-area", "text", "metric"]
	},

	{
		"id": "Cao2015",
		"title": "SocialHelix",
		"year": 2015,
		"authors": "Nan Cao et al.",
		"reference": "Nan Cao, Lu Lu, Yu-Ru Lin, Fei Wang, and Zhen Wen. <i>SocialHelix: visual analysis of sentiment divergence in social media</i>. Journal of Visualization, vol. 18, no. 2, pp. 221-235, 2015.",
		"url": "https://doi.org/10.1007/s12650-014-0246-x",
		"categories": ["sentiment-analysis", "text-summarization", "event-analysis", "trend-analysis", "relation-analysis", "overview", "classification", "navigation", "comparison", "corpora", "time-series", "networks", "social-media", "2d", "line-plot", "glyph", "text", "clouds", "node-link", "metric"]
	},

	{
		"id": "Le2014",
		"title": "SSE",
		"year": 2014,
		"authors": "Tuan M.V. Le and Hady W. Lauw",
		"reference": "Tuan M.V. Le and Hady W. Lauw. <i>Semantic visualization for spherical representation</i>. Proceedings of the ACM SIGKDD international conference on Knowledge discovery and data mining (KDD), pp. 1007-1016, 2014.",
		"url": "https://doi.org/10.1145/2623330.2623620",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "corpora", "2d", "clouds", "metric"]
	},

	{
		"id": "Ingram2015",
		"title": "Q-SNE",
		"year": 2015,
		"authors": "Stephen Ingram and Tamara Munzner",
		"reference": "Stephen Ingram and Tamara Munzner. <i>Dimensionality reduction for documents with nearest neighbor queries</i>. Neurocomputing, vol. 150, part B, pp. 557–569, 2015.",
		"url": "https://doi.org/10.1016/j.neucom.2014.07.073",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "corpora", "2d", "clouds", "metric"]
	},

	{
		"id": "Spoerri1993",
		"title": "InfoCrystal",
		"year": 1993,
		"authors": "Anselm Spoerri",
		"reference": "Anselm Spoerri. <i>InfoCrystal: A visual tool for information retrieval</i>. Proceedings of IEEE Conference on Visualization, pp. 150-157, 1993.",
		"url": "https://doi.org/10.1109/VISUAL.1993.398863",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "roi", "corpora", "2d", "glyph", "clouds", "node-link", "metric", "radial"]
	},

	{
		"id": "Ribler2000",
		"title": "Patterngrams",
		"year": 2000,
		"authors": "Randy L. Ribler and Marc Abrams",
		"reference": "Randy L. Ribler and Marc Abrams. <i>Using Visualization to Detect Plagiarism in Computer Science Classes</i>. Proceedings of the IEEE Symposium on Information Visualization (INFOVIS), pp. 173-178, 2000.",
		"url": "http://infovis.cs.vt.edu/oldsite/cs5764/papers/ribler.pdf",
		"categories": ["translation-analysis", "trend-analysis", "overview", "comparison", "classification", "roi", "navigation", "corpora", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Abbasi2006",
		"title": "Writeprints",
		"year": 2006,
		"authors": "Ahmed Abbasi and Hsinchun Chen",
		"reference": "Ahmed Abbasi and Hsinchun Chen. <i>Visualizing Authorship for Identification</i>. Proceedings of the IEEE International Conference on Intelligence and Security Informatics (ISI), pp. 60-71, 2006.",
		"url": "https://doi.org/10.1007/11760146_6",
		"categories": ["translation-analysis", "trend-analysis", "overview", "comparison", "classification", "corpora", "social-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Burch2013",
		"title": "Prefix Tag Clouds",
		"year": 2013,
		"authors": "Michael Burch et al.",
		"reference": "Michael Burch, Steffen Lohmann, Daniel Pompe, and Daniel Weiskopf. <i>Prefix Tag Clouds</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 45-50, 2013.",
		"url": "https://doi.org/10.1109/IV.2013.5",
		"categories": ["text-summarization", "relation-analysis", "lexical-analysis", "overview", "comparison", "roi", "corpora", "2d", "clouds", "text", "metric", "radial"]
	},

	{
		"id": "Nguyen2011",
		"title": "Spatiotemporal Tags",
		"year": 2011,
		"authors": "Dinh Quyen Nguyen et al.",
		"reference": "Dinh Quyen Nguyen, Christian Tominski, Heidrun Schumann, and Tuan Anh Ta. <i>Visualizing Tags with Spatiotemporal References</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 32-39, 2011.",
		"url": "https://doi.org/10.1109/IV.2011.43",
		"categories": ["text-summarization", "relation-analysis", "overview", "roi", "comparison", "corpora", "geospatial", "time-series", "social-media", "2d", "maps", "clouds", "linear"]
	},

	{
		"id": "Culy2011",
		"title": "xLDD",
		"year": 2011,
		"authors": "Chris Culy, Verena Lyding, and Henrik Dittmann",
		"reference": "Chris Culy, Verena Lyding, and Henrik Dittmann. <i>xLDD: Extended Linguistic Dependency Diagrams</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 164-169, 2011.",
		"url": "https://doi.org/10.1109/IV.2011.42",
		"categories": ["text-summarization", "lexical-analysis", "overview", "comparison", "document", "literature", "2d", "node-link", "metric"]
	},

	{
		"id": "Costagliola2011",
		"title": "CyBiS",
		"year": 2011,
		"authors": "Gennaro Costagliola and Vittorio Fuccella",
		"reference": "Gennaro Costagliola and Vittorio Fuccella. <i>CyBiS: A Novel Interface for Searching Scientific Documents</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 276-281, 2011.",
		"url": "https://doi.org/10.1109/IV.2011.95",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "comparison", "roi", "navigation", "corpora", "time-series", "papers", "3d", "clouds", "linear", "radial"]
	},

	{
		"id": "Eler2009",
		"title": "Topic Time Coordination",
		"year": 2009,
		"authors": "Danilo Medeiros Eler et al.",
		"reference": "Danilo Medeiros Eler, Fernando Vieira Paulovich, Maria Cristina Ferreira de Oliveira, and Rosane Minghim. <i>Topic-Based Coordination for Visual Analysis of Evolving Document Collections</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 149-155, 2009.",
		"url": "https://doi.org/10.1109/IV.2009.31",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "roi", "corpora", "time-series", "2d", "node-link", "clouds", "metric"]
	},

	{
		"id": "PascualCid2009",
		"title": "WET",
		"year": 2009,
		"authors": "Víctor Pascual-Cid and Andreas Kaltenbrunner",
		"reference": "Víctor Pascual-Cid and Andreas Kaltenbrunner. <i>Exploring Asynchronous Online Discussions through Hierarchical Visualisation</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 191-196, 2009.",
		"url": "https://doi.org/10.1109/IV.2009.14",
		"categories": ["discourse-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "navigation", "roi", "corpora", "time-series", "networks", "social-media", "2d", "node-link", "glyph", "radial"]
	},

	{
		"id": "Rusu2009",
		"title": "Semantic Graphs",
		"year": 2009,
		"authors": "Delia Rusu et al.",
		"reference": "Delia Rusu, Blaž Fortuna, Dunja Mladenić, Marko Grobelnik, and Ruben Sipoš. <i>Document Visualization Based on Semantic Graphs</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 292-297, 2009.",
		"url": "https://doi.org/10.1109/IV.2009.57",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "roi", "document", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "Thai2008",
		"title": "IVEA",
		"year": 2008,
		"authors": "VinhTuan Thai, Siegfried Handschuh, and Stefan Decker",
		"reference": "VinhTuan Thai, Siegfried Handschuh, and Stefan Decker. <i>Tight Coupling of Personal Interests with Multi-dimensional Visualization for Exploration and Analysis of Text Collections</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 221-226, 2008.",
		"url": "https://doi.org/10.1109/IV.2008.28",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Slingsby2007",
		"title": "Tag Maps and Tag Clouds",
		"year": 2007,
		"authors": "Aidan Slingsby et al.",
		"reference": "Aidan Slingsby, Jason Dykes, Jo Wood, and Keith Clarke. <i>Interactive Tag Maps and Tag Clouds for the Multiscale Exploration of Large Spatio-temporal Datasets</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 497-504, 2007.",
		"url": "https://doi.org/10.1109/IV.2007.71",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "classification", "corpora", "geospatial", "time-series", "communication", "2d", "maps", "clouds", "node-link", "linear", "metric"]
	},

	{
		"id": "Weber2007",
		"title": "Text-Image",
		"year": 2007,
		"authors": "Wibke Weber",
		"reference": "Wibke Weber. <i>Text Visualization – What Colors Tell About a Text</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 354-362, 2007.",
		"url": "https://doi.org/10.1109/IV.2007.108",
		"categories": ["text-summarization", "lexical-analysis", "overview", "comparison", "classification", "document", "literature", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Akaishi2007",
		"title": "Topic Sequence",
		"year": 2007,
		"authors": "Mina Akaishi et al.",
		"reference": "Mina Akaishi, Ken Satoh, Yoshikiyo Kato, and Koichi Hori. <i>Narrative based Topic Visualization for Chronological Data</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 139-144, 2007.",
		"url": "https://doi.org/10.1109/IV.2007.80",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "roi", "document", "literature", "2d", "node-link", "glyph", "metric"]
	},

	{
		"id": "Smith2001",
		"title": "Netscan",
		"year": 2001,
		"authors": "Marc A. Smith and Andrew T. Fiore",
		"reference": "Marc A. Smith and Andrew T. Fiore. <i>Visualization components for persistent conversations</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 136-143, 2001.",
		"url": "https://doi.org/10.1145/365024.365073",
		"categories": ["trend-analysis", "relation-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "networks", "communication", "2d", "node-link", "text", "linear", "metric"]
	},

	{
		"id": "Jacquemin2006",
		"title": "OCEAN",
		"year": 2006,
		"authors": "Christian Jacquemin, Helka Folch, and Sylvaine Nugier",
		"reference": "Christian Jacquemin, Helka Folch, and Sylvaine Nugier. <i>OCEAN: 2 1/2D Interactive Visual Data Mining of Text Documents</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 383-388, 2006.",
		"url": "https://doi.org/10.1109/IV.2006.78",
		"categories": ["relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "networks", "2d", "3d", "node-link", "clouds", "glyph", "metric"]
	},

	{
		"id": "Paulovich2006_1",
		"title": "Least Square Projection",
		"year": 2006,
		"authors": "Fernando Vieira Paulovich et al.",
		"reference": "Fernando Vieira Paulovich, Luis Gustavo Nonato, Rosane Minghim, and Haim Levkowitz. <i>Visual Mapping of Text Collections through a Fast High Precision Projection Technique</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 282-290, 2006.",
		"url": "https://doi.org/10.1109/IV.2006.122",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "roi", "corpora", "2d", "3d", "node-link", "maps", "metric"]
	},

	{
		"id": "Paulovich2006_2",
		"title": "Text Map Explorer",
		"year": 2006,
		"authors": "Fernando Vieira Paulovich and Rosane Minghim",
		"reference": "Fernando Vieira Paulovich and Rosane Minghim. <i>Text Map Explorer: a Tool to Create and Explore Document Maps</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 245-251, 2006.",
		"url": "https://doi.org/10.1109/IV.2006.104",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "2d", "node-link", "clouds", "metric"]
	},

	{
		"id": "Chen2006_2",
		"title": "CiteSpace",
		"year": 2006,
		"authors": "Chaomei Chen",
		"reference": "Chaomei Chen. <i>CiteSpace II: Detecting and visualizing emerging trends and transient patterns in scientific literature</i>. Journal of the American Society for Information Science and Technology, vol. 57, no. 3, pp. 359-377, 2006.",
		"url": "https://doi.org/10.1002/asi.20317",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "roi", "classification", "overview", "navigation", "corpora", "networks", "time-series", "patents", "papers", "2d", "line-plot", "node-link", "glyph", "text", "metric"]
	},

	{
		"id": "Zhu2007",
		"title": "Storylines",
		"year": 2007,
		"authors": "Weizhong Zhu and Chaomei Chen",
		"reference": "Weizhong Zhu and Chaomei Chen. <i>Storylines: Visual exploration and analysis in latent semantic spaces</i>. Computers & Graphics, vol. 31, no. 3, pp. 338-349, 2007.",
		"url": "https://doi.org/10.1016/j.cag.2007.01.025",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "classification", "navigation", "roi", "corpora", "networks", "time-series", "editorial-media", "2d", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Robertson1998",
		"title": "Data Mountain",
		"year": 1998,
		"authors": "George G. Robertson et al.",
		"reference": "George G. Robertson, Mary Czerwinski, Kevin Larson, Daniel C. Robbins, David Thiel, and Maarten van Dantzich. <i>Data Mountain: using spatial memory for document management</i>. Proceedings of the ACM symposium on User interface software and technology (UIST), pp. 153-162, 1998.",
		"url": "https://doi.org/10.1145/288392.288596",
		"categories": ["overview", "navigation", "corpora", "3d", "glyph", "maps", "metric"]
	},

	{
		"id": "Sudarsky2002",
		"title": "Email Clustering",
		"year": 2002,
		"authors": "Sandra Sudarsky and Rune Hjelsvold",
		"reference": "Sandra Sudarsky and Rune Hjelsvold. <i>Visualizing electronic mail</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 3-9, 2002.",
		"url": "https://doi.org/10.1109/IV.2002.1028749",
		"categories": ["trend-analysis", "relation-analysis", "overview", "navigation", "classification", "roi", "corpora", "time-series", "communication", "2d", "clouds", "node-link", "text", "linear"]
	},

	{
		"id": "Kienreich2005",
		"title": "Gyro Knowledge Map",
		"year": 2005,
		"authors": "Wolfgang Kienreich and Michael Granitzer",
		"reference": "Wolfgang Kienreich and Michael Granitzer. <i>Visualising knowledge maps for encyclopedia articles</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 213-218, 2005.",
		"url": "https://doi.org/10.1109/IV.2005.142",
		"categories": ["overview", "navigation", "comparison", "corpora", "editorial-media", "3d", "glyph", "maps", "radial"]
	},

	{
		"id": "Taskaya2003",
		"title": "SATISFI",
		"year": 2003,
		"authors": "Tugba Taskaya and Khurshid Ahmad",
		"reference": "Tugba Taskaya and Khurshid Ahmad. <i>Bimodal visualisation: a financial trading case study</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 320-326, 2003.",
		"url": "https://doi.org/10.1109/IV.2003.1217997",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "navigation", "comparison", "classification", "corpora", "time-series", "editorial-media", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Yeap2005",
		"title": "SmartINFO",
		"year": 2005,
		"authors": "Wai K. Yeap et al.",
		"reference": "Wai K. Yeap, Paul Reedy, Kyongho Min, and Hilda Ho. <i>Visualizing the meaning of texts</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 883-888, 2005.",
		"url": "https://doi.org/10.1109/IV.2005.153",
		"categories": ["text-summarization", "lexical-analysis", "relation-analysis", "overview", "navigation", "comparison", "classification", "document", "networks", "2d", "node-link", "clouds", "radial", "linear", "metric"]
	},

	{
		"id": "Perez2004",
		"title": "3D Explorer",
		"year": 2004,
		"authors": "Cesar Perez and Angelica de Antonio",
		"reference": "Cesar Perez and Angelica de Antonio. <i>3D visualization of text collections: an experimental study to assess the usefulness of 3D</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 317-323, 2004.",
		"url": "https://doi.org/10.1109/IV.2004.1320163",
		"categories": ["text-summarization", "relation-analysis", "overview", "navigation", "comparison", "classification", "corpora", "3d", "clouds", "glyph", "metric"]
	},

	{
		"id": "Chigona2002",
		"title": "DUIS",
		"year": 2002,
		"authors": "Wallace Chigona and Thomas Strothotte",
		"reference": "Wallace Chigona and Thomas Strothotte. <i>Distortion for readability of contextualized text explanations for visualizations</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 289-294, 2002.",
		"url": "https://doi.org/10.1109/IV.2002.1028790",
		"categories": ["navigation", "2d", "text", "maps", "metric"]
	},

	{
		"id": "OConnor2014",
		"title": "MiTextExplorer",
		"year": 2014,
		"authors": "Brendan O'Connor",
		"reference": "Brendan O'Connor. <i>MiTextExplorer: Linked brushing and mutual information for exploratory text data analysis</i>. Proceedings of the Workshop on Interactive Language Learning, Visualization, and Interfaces, pp. 1-13, 2014.",
		"url": "http://www.aclweb.org/anthology/W14-3101",
		"categories": ["text-summarization", "trend-analysis", "lexical-analysis", "roi", "comparison", "overview", "navigation", "corpora", "geospatial", "time-series", "social-media", "papers", "literature", "2d", "clouds", "text", "linear"]
	},

	{
		"id": "Wecker2014",
		"title": "Semantize",
		"year": 2014,
		"authors": "Alan J. Wecker et al.",
		"reference": "Alan J. Wecker, Joel Lanir, Osnat Mokryn, Einat Minkov, and Tsvi Kuflik. <i>Semantize: visualizing the sentiment of individual document</i>. Proceedings of the International Working Conference on Advanced Visual Interfaces (AVI), pp. 385-386, 2014.",
		"url": "https://doi.org/10.1145/2598153.2600056",
		"categories": ["sentiment-analysis", "classification", "navigation", "document", "2d", "text"]
	},

	{
		"id": "Kuang2014",
		"title": "ImgWordle",
		"year": 2014,
		"authors": "Chong Kuang et al.",
		"reference": "Chong Kuang, Jiayu Tang, Zhiyuan Liu, and Maosong Sun. <i>ImgWordle: image and text visualization for events in microblogging services</i>. Proceedings of the International Working Conference on Advanced Visual Interfaces (AVI), pp. 371-372, 2014.",
		"url": "https://doi.org/10.1145/2598153.2600041",
		"categories": ["text-summarization", "trend-analysis", "sentiment-analysis", "overview", "classification", "navigation", "corpora", "geospatial", "time-series", "social-media", "2d", "maps", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Prasojo2015",
		"title": "ORCAESTRA",
		"year": 2015,
		"authors": "Radityo Eko Prasojo, Fariz Darari, and Mouna Kacimi",
		"reference": "Radityo Eko Prasojo, Fariz Darari, and Mouna Kacimi. <i>ORCAESTRA: Organizing News Comments using Aspect, Entity and Sentiment Extraction</i>. Poster Abstracts of IEEE VIS, 2015.",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "overview", "classification", "navigation", "comparison", "corpora", "networks", "editorial-media", "social-media", "2d", "node-link", "clouds", "text", "radial", "metric"]
	},

	{
		"id": "Kerren2013",
		"title": "Wine Reviews Visualization",
		"year": 2013,
		"authors": "Andreas Kerren, Mimi Kyusakova, and Carita Paradis",
		"reference": "Andreas Kerren, Mimi Kyusakova, and Carita Paradis. <i>From Culture to Text to Interactive Visualization of Wine Reviews</i>. Knowledge Visualization Currents, pp. 85-110, 2013.",
		"url": "https://doi.org/10.1007/978-1-4471-4303-1_5",
		"categories": ["discourse-analysis", "trend-analysis", "lexical-analysis", "overview", "roi", "comparison", "navigation", "corpora", "time-series", "geospatial", "reviews", "2d", "maps", "clouds", "node-link", "text", "linear"]
	},

	{
		"id": "Munezero2015",
		"title": "EmoTwitter",
		"year": 2015,
		"authors": "Myriam Munezero et al.",
		"reference": "Myriam Munezero, Calkin Suero Montero, Maxim Mozgovoy, and Erkki Sutinen. <i>EmoTwitter – A Fine-Grained Visualization System for Identifying Enduring Sentiments in Tweets</i>. Proceedings of the International Conference on Intelligent Text Processing and Computational Linguistics (CICLing), pp. 78-91, 2015.",
		"url": "https://doi.org/10.1007/978-3-319-18117-2_6",
		"categories": ["text-summarization", "trend-analysis", "sentiment-analysis", "overview", "classification", "comparison", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "clouds", "linear", "radial", "metric"]
	},

	{
		"id": "Liu2003",
		"title": "Affect Color Bar",
		"year": 2003,
		"authors": "Hugo Liu, Ted Selker, and Henry Lieberman",
		"reference": "Hugo Liu, Ted Selker, and Henry Lieberman. <i>Visualizing the affective structure of a text document</i>. CHI Extended Abstracts on Human Factors in Computing Systems (CHI EA), pp. 740-741, 2003.",
		"url": "https://doi.org/10.1145/765891.765961",
		"categories": ["sentiment-analysis", "overview", "classification", "comparison", "navigation", "document", "literature", "2d", "pixel-area", "glyph", "text", "linear"]
	},

	{
		"id": "Cao2016",
		"title": "TargetVue",
		"year": 2016,
		"authors": "Nan Cao et al.",
		"reference": "Nan Cao, Conglei Shi, Sabrina Lin, Jie Lu, Yu-Ru Lin, and Ching-Yung Lin. <i>TargetVue: Visual Analysis of Anomalous User Behaviors in Online Communication Systems</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 280-289, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467196",
		"categories": ["text-summarization", "trend-analysis", "sentiment-analysis", "relation-analysis", "overview", "monitoring", "classification", "roi", "comparison", "navigation", "corpora", "streams", "time-series", "networks", "social-media", "communication", "2d", "pixel-area", "glyph", "maps", "clouds", "text", "node-link", "radial", "metric"]
	},

	{
		"id": "Fukuhara2007",
		"title": "Sentiment-biased Topic Visualization",
		"year": 2007,
		"authors": "Tomohiro Fukuhara, Hiroshi Nakagawa and Toyoaki Nishida",
		"reference": "Tomohiro Fukuhara, Hiroshi Nakagawa and Toyoaki Nishida. <i>Understanding Sentiment of People from News Articles: Temporal Sentiment Analysis of Social Events</i>. Proceedings of the International Conference on Weblogs and Social Media (ICWSM), 2007.",
		"url": "http://www.icwsm.org/papers/paper49.html",
		"categories": ["text-summarization", "trend-analysis", "sentiment-analysis", "overview", "classification", "comparison", "corpora", "time-series", "social-media", "editorial-media", "2d", "line-plot", "linear"]
	},

	{
		"id": "Mishne2006",
		"title": "MoodViews",
		"year": 2006,
		"authors": "Gilad Mishne and Maarten de Rijke",
		"reference": "Gilad Mishne and Maarten de Rijke. <i>MoodViews: Tools for Blog Mood Analysis</i>. Proceedings of the AAAI Spring Symposium: Computational Approaches to Analyzing Weblogs, pp. 153-154, 2006.",
		"url": "http://www.aaai.org/Library/Symposia/Spring/2006/ss06-03-029.php",
		"categories": ["trend-analysis", "sentiment-analysis", "overview", "classification", "comparison", "corpora", "time-series", "social-media", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Lu2016",
		"title": "Event Cueing Visualization",
		"year": 2016,
		"authors": "Yafeng Lu et al.",
		"reference": "Yafeng Lu, Michael Steptoe, Sarah Burke, Hong Wang, Jiun-Yi Tsai, Hasan Davulcu, Douglas Montgomery, Steven R. Corman, and Ross Maciejewski. <i>Exploring Evolving Media Discourse Through Event Cueing</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 220-229, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467991",
		"categories": ["text-summarization", "trend-analysis", "sentiment-analysis", "event-analysis", "relation-analysis", "overview", "classification", "roi", "comparison", "navigation", "uncertainty", "corpora", "streams", "time-series", "geospatial", "editorial-media", "2d", "line-plot", "pixel-area", "glyph", "maps", "clouds", "text", "node-link", "linear", "radial"]
	},

	{
		"id": "Afzal2012",
		"title": "TypoMap",
		"year": 2012,
		"authors": "Shehzad Afzal et al.",
		"reference": "Shehzad Afzal, Ross Maciejewski, Yun Jang, Niklas Elmqvist, and David S. Ebert. <i>Spatial Text Visualization Using Automatic Typographic Maps</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 12, pp. 2556-2564, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2012.264",
		"categories": ["overview", "comparison", "roi", "geospatial", "2d", "maps", "text", "metric"]
	},

	{
		"id": "Strobelt2016",
		"title": "TextAnno",
		"year": 2016,
		"authors": "Hendrik Strobelt et al.",
		"reference": "Hendrik Strobelt, Daniela Oelke, Bum Chul Kwon, Tobias Schreck, and Hanspeter Pfister. <i>Guidelines for Effective Usage of Text Highlighting Techniques</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 489-498, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467759",
		"categories": ["roi", "document", "2d", "text"]
	},

	{
		"id": "Heimerl2016",
		"title": "CiteRivers",
		"year": 2016,
		"authors": "Florian Heimerl et al.",
		"reference": "Florian Heimerl, Qi Han, Steffen Koch, and Thomas Ertl. <i>CiteRivers: Visual Analytics of Citation Patterns</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 190-199, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467621",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "roi", "navigation", "comparison", "classification", "corpora", "time-series", "networks", "papers", "2d", "line-plot", "clouds", "node-link", "text", "linear", "metric"]
	},

	{
		"id": "Janicke2016",
		"title": "Interactive Visual Profiling of Musicians",
		"year": 2016,
		"authors": "Stefan Jänicke, Josef Focht, and Gerik Scheuermann",
		"reference": "Stefan Jänicke, Josef Focht, and Gerik Scheuermann. <i>Interactive Visual Profiling of Musicians</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 200-209, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467620",
		"categories": ["relation-analysis", "overview", "comparison", "roi", "uncertainty", "corpora", "networks", "editorial-media", "2d", "line-plot", "node-link", "maps", "glyph", "linear", "metric"]
	},

	{
		"id": "Yatani2011",
		"title": "Review Spotlight",
		"year": 2011,
		"authors": "Koji Yatani et al.",
		"reference": "Koji Yatani, Michael Novati, Andrew Trusty, and Khai N. Truong. <i>Review spotlight: a user interface for summarizing user-generated reviews using adjective-noun word pairs</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 1541-1550, 2011.",
		"url": "https://doi.org/10.1145/1978942.1979167",
		"categories": ["text-summarization", "sentiment-analysis", "overview", "classification", "comparison", "navigation", "corpora", "reviews", "2d", "text", "clouds", "metric"]
	},

	{
		"id": "Wang2013_3",
		"title": "Fisheye Word Cloud",
		"year": 2013,
		"authors": "Ji Wang, Kyle D. Dent, and Chris L. North",
		"reference": "Ji Wang, Kyle D. Dent, and Chris L. North. <i>Fisheye word cloud for temporal sentiment exploration</i>. CHI Extended Abstracts on Human Factors in Computing Systems (CHI EA), pp. 1767-1772, 2013.",
		"url": "https://doi.org/10.1145/2468356.2468673",
		"categories": ["text-summarization", "relation-analysis", "sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Annett2008",
		"title": "Sentiment Visualization for eNulog",
		"year": 2008,
		"authors": "Michelle Annett and Grzegorz Kondrak",
		"reference": "Michelle Annett and Grzegorz Kondrak. <i>A Comparison of Sentiment Analysis Techniques: Polarizing Movie Blogs</i>. Proceedings of Conference of the Canadian Society for Computational Studies of Intelligence (Canadian AI), pp. 25-35, 2008.",
		"url": "https://doi.org/10.1007/978-3-540-68825-9_3",
		"categories": ["sentiment-analysis", "relation-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "social-media", "2d", "clouds", "glyph", "metric"]
	},

	{
		"id": "Tat2006",
		"title": "CrystalChat",
		"year": 2006,
		"authors": "Annie Tat and Sheelagh Carpendale",
		"reference": "Annie Tat and Sheelagh Carpendale. <i>CrystalChat: Visualizing Personal Chat History</i>. Proceedings of the Annual Hawaii International Conference on System Sciences (HICSS), vol. 3, 2006.",
		"url": "https://doi.org/10.1109/HICSS.2006.107",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "communication", "3d", "glyph", "maps", "text", "linear"]
	},

	{
		"id": "Beck2016",
		"title": "SurVis",
		"year": 2016,
		"authors": "Fabian Beck, Sebastian Koch, and Daniel Weiskopf",
		"reference": "Fabian Beck, Sebastian Koch, and Daniel Weiskopf. <i>Visual Analysis and Dissemination of Scientific Literature Collections with SurVis</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 180-189, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467757",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "navigation", "comparison", "classification", "corpora", "time-series", "networks", "papers", "2d", "text", "pixel-area", "linear"]
	},

	{
		"id": "Marrese-Taylor2013",
		"title": "Opinion Zoom",
		"year": 2013,
		"authors": "Edison Marrese-Taylor, Juan D. Velásquez, and Felipe Bravo-Marquez",
		"reference": "Edison Marrese-Taylor, Juan D. Velásquez, and Felipe Bravo-Marquez. <i>Opinion Zoom: A Modular Tool to Explore Tourism Opinions on the Web</i>. Proceedings of IEEE/WIC/ACM International Joint Conferences on the Web Intelligence (WI) and Intelligent Agent Technologies (IAT), pp. 261-264, 2013.",
		"url": "https://doi.org/10.1109/WI-IAT.2013.193",
		"categories": ["sentiment-analysis", "relation-analysis", "overview", "comparison", "classification", "corpora", "reviews", "2d", "text", "pixel-area", "clouds", "linear", "metric"]
	},

	{
		"id": "Kranjc2015",
		"title": "ClowdFlows",
		"year": 2015,
		"authors": "Janez Kranjc et al.",
		"reference": "Janez Kranjc, Jasmina Smailović, Vid Podpečan, Miha Grčar, Martin Žnidaršič, and Nada Lavrač. <i>Active learning for sentiment analysis on data streams: Methodology and workflow implementation in the ClowdFlows platform</i>. Information Processing & Management, vol. 51, no. 2, pp. 187–203, 2015.",
		"url": "https://doi.org/10.1016/j.ipm.2014.04.001",
		"categories": ["sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "monitoring", "classification", "comparison", "corpora", "streams", "time-series", "social-media", "2d", "line-plot", "clouds", "linear"]
	},

	{
		"id": "DiCaro2013",
		"title": "SentiVis",
		"year": 2013,
		"authors": "Luigi Di Caro and Matteo Grella",
		"reference": "Luigi Di Caro and Matteo Grella. <i>Sentiment analysis via dependency parsing</i>. Computer Standards & Interfaces, vol. 35, no. 5, pp. 442-453, 2013.",
		"url": "https://doi.org/10.1016/j.csi.2012.10.005",
		"categories": ["sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "classification", "navigation", "comparison", "corpora", "reviews", "2d", "line-plot", "linear"]
	},

	{
		"id": "Kim2014",
		"title": "Semi-supervised Laplacian Eigenmap",
		"year": 2014,
		"authors": "Kyoungok Kim and Jaewook Lee",
		"reference": "Kyoungok Kim and Jaewook Lee. <i>Sentiment visualization and classification via semi-supervised nonlinear dimensionality reduction</i>. Pattern Recognition, vol. 47, no. 2, pp. 758-768, 2014.",
		"url": "https://doi.org/10.1016/j.patcog.2013.07.022",
		"categories": ["sentiment-analysis", "relation-analysis", "overview", "classification", "comparison", "corpora", "reviews", "2d", "clouds", "metric"]
	},

	{
		"id": "Scharl2016",
		"title": "Westeros Sentinel",
		"year": 2016,
		"authors": "Arno Scharl et al.",
		"reference": "Arno Scharl, Alexander Hubmann-Haidvogel, Alistair Jones, Daniel Fischl, Ruslan Kamolov, Albert Weichselbraun, and Walter Rafelsberger. <i>Analyzing the public discourse on works of fiction – Detection and visualization of emotion in online coverage about HBO’s Game of Thrones</i>. Information Processing & Management, vol. 52, no. 1, pp. 129-138, 2016.",
		"url": "https://doi.org/10.1016/j.ipm.2015.02.003",
		"categories": ["sentiment-analysis", "discourse-analysis", "text-summarization", "lexical-analysis", "relation-analysis", "overview", "monitoring", "classification", "comparison", "navigation", "corpora", "streams", "time-series", "networks", "social-media", "editorial-media", "2d", "line-plot", "node-link", "pixel-area", "text", "linear", "radial"]
	},

	{
		"id": "Brath2015",
		"title": "Text Stem & Leaf Plot",
		"year": 2015,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Using Text in Visualizations for Micro/Macro Readings</i>. Proceedings of the IUI Workshop on Visual Text Analytics (TextVis), 2015.",
		"url": "http://vialab.science.uoit.ca/textvis2015/papers/Brath-textvis2015.pdf",
		"categories": ["text-summarization", "classification", "document", "roi", "literature", "2d", "text", "linear"]
	},

	{
		"id": "Olsen1993",
		"title": "VIBE",
		"year": 1993,
		"authors": "Kai A. Olsen et al.",
		"reference": "Kai A. Olsen, Robert R. Korfhage, Kenneth M. Sochats, Michael B. Spring, and James G. Williams. <i>Visualization of a document collection: The VIBE system</i>. Information Processing & Management, vol. 29, no. 1, pp. 69-81, 1993.",
		"url": "https://doi.org/10.1016/0306-4573(93)90024-8",
		"categories": ["text-summarization", "relation-analysis", "classification", "overview", "roi", "navigation", "comparison", "corpora", "papers", "2d", "glyph", "clouds", "metric"]
	},

	{
		"id": "Liu2016",
		"title": "MutualRanker",
		"year": 2016,
		"authors": "Mengchen Liu et al.",
		"reference": "Mengchen Liu, Shixia Liu, Xizhou Zhu, Qinying Liao, Furu Wei, and Shimei Pan. <i>An Uncertainty-Aware Approach for Exploratory Microblog Retrieval</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 250-259, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467554",
		"categories": ["text-summarization", "relation-analysis", "classification", "overview", "roi", "navigation", "comparison", "uncertainty", "corpora", "networks", "social-media", "2d", "node-link", "maps", "clouds", "text", "glyph", "metric"]
	},

	{
		"id": "Cho2016",
		"title": "VAiRoma",
		"year": 2016,
		"authors": "Isaac Cho et al.",
		"reference": "Isaac Cho, Wenwen Dou, Derek Xiaoyu Wang, Eric Sauda, and William Ribarsky. <i>VAiRoma: A Visual Analytics System for Making Sense of Places, Times, and Events in Roman History</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 210-219, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467971",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "trend-analysis", "classification", "overview", "roi", "navigation", "comparison", "uncertainty", "corpora", "time-series", "geospatial", "editorial-media", "2d", "line-plot", "node-link", "glyph", "maps", "pixel-area", "clouds", "text", "linear", "radial", "metric"]
	},

	{
		"id": "McCurdy2016",
		"title": "Poemage",
		"year": 2016,
		"authors": "Nina McCurdy et al.",
		"reference": "Nina McCurdy, Julie Lein, Katharine Coles, and Miriah Meyer. <i>Poemage: Visualizing the Sonic Topology of a Poem</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 439-448, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467811",
		"categories": ["lexical-analysis", "translation-analysis", "classification", "roi", "overview", "comparison", "document", "literature", "2d", "line-plot", "node-link", "text", "linear", "metric"]
	},

	{
		"id": "Subasic2001",
		"title": "Affect Inspector",
		"year": 2001,
		"authors": "Pero Subasic and Alison Huettner",
		"reference": "Pero Subasic and Alison Huettner. <i>Affect analysis of text using fuzzy semantic typing</i>. IEEE Transactions on Fuzzy Systems, vol. 9, no. 4, pp. 483-496, 2001.",
		"url": "https://doi.org/10.1109/91.940962",
		"categories": ["sentiment-analysis", "relation-analysis", "classification", "comparison", "navigation", "document", "corpora", "editorial-media", "reviews", "literature", "2d", "line-plot", "clouds", "radial"]
	},

	{
		"id": "Mohammad2012",
		"title": "Emotion tracking visualization",
		"year": 2012,
		"authors": "Saif M. Mohammad",
		"reference": "Saif M. Mohammad. <i>From once upon a time to happily ever after: Tracking emotions in mail and books</i>. Decision Support Systems, vol. 53, no. 4, pp. 730-741, 2012.",
		"url": "https://doi.org/10.1016/j.dss.2012.05.03",
		"categories": ["sentiment-analysis", "trend-analysis", "lexical-analysis", "classification", "comparison", "navigation", "overview", "document", "corpora", "communication", "literature", "2d", "line-plot", "pixel-area", "clouds", "linear", "radial", "metric"]
	},

	{
		"id": "Kang2011",
		"title": "Emotion Topic Diagram",
		"year": 2011,
		"authors": "Xin Kang and Fuji Ren",
		"reference": "Xin Kang and Fuji Ren. <i>Sampling latent emotions and topics in a hierarchical Bayesian network</i>. Proceedings of the International Conference on Natural Language Processing and Knowledge Engineering (NLP-KE), pp. 37-42, 2011.",
		"url": "https://doi.org/10.1109/NLPKE.2011.6138166",
		"categories": ["sentiment-analysis", "text-summarization", "relation-analysis", "lexical-analysis", "overview", "classification", "comparison", "document", "corpora", "social-media", "2d", "node-link", "metric"]
	},

	{
		"id": "Lee2010_2",
		"title": "Financial Blogs Visualization",
		"year": 2010,
		"authors": "Hyowon Lee et al.",
		"reference": "Hyowon Lee, Paul Ferguson, Neil O'Hare, Cathal Gurrin, and Alan F. Smeaton. <i>Integrating Interactivity into Visualising Sentiment Analysis of Blogs</i>. Proceedings of the International Workshop on Intelligent Visual Interfaces for Text Analysis (IVITA), pp. 17-20, 2010.",
		"url": "https://doi.org/10.1145/2002353.2002360",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "navigation", "comparison", "classification", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "glyph", "text", "linear"]
	},

	{
		"id": "Li2009",
		"title": "Emotion Matrix Visualization",
		"year": 2009,
		"authors": "Huana Li and Fuji Ren",
		"reference": "Huana Li and Fuji Ren. <i>The study on text emotional orientation based on a three-dimensional emotion space model</i>. Proceedings of the International Conference on Natural Language Processing and Knowledge Engineering (NLP-KE), 2009.",
		"url": "https://doi.org/10.1109/NLPKE.2009.5313815",
		"categories": ["sentiment-analysis", "overview", "classification", "document", "social-media", "2d", "3d", "maps", "metric"]
	},

	{
		"id": "Gobron2010",
		"title": "FACS-based Emotion Visualization",
		"year": 2010,
		"authors": "Stephane Gobron et al.",
		"reference": "Stephane Gobron, Junghyun Ahn, Georgios Paltoglou, Michael Thelwall, and Daniel Thalmann. <i>From sentence to emotion: a real-time three-dimensional graphics metaphor of emotions extracted from text</i>. The Visual Computer, vol. 26, no. 6, pp. 505-519, 2010.",
		"url": "https://doi.org/10.1007/s00371-010-0446-x",
		"categories": ["sentiment-analysis", "monitoring", "classification", "document", "streams", "communication", "social-media", "3d", "glyph", "metric"]
	},

	{
		"id": "Jiang2016",
		"title": "Cross-domain Research Topics Visualization",
		"year": 2016,
		"authors": "Xinyi Jiang and Jiawan Zhang",
		"reference": "Xinyi Jiang and Jiawan Zhang. <i>A text visualization method for cross-domain research topic mining</i>. Journal of Visualization, 2016.",
		"url": "https://doi.org/10.1007/s12650-015-0323-9",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "roi", "classification", "comparison", "navigation", "corpora", "time-series", "papers", "2d", "line-plot", "pixel-area", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Wanner2016",
		"title": "Hybrid Temporal Pattern Mining Visualization",
		"year": 2016,
		"authors": "Franz Wanner et al.",
		"reference": "Franz Wanner, Wolfgang Jentner, Tobias Schreck, Andreas Stoffel, Lyubka Sharalieva, and Daniel A. Keim. <i>Integrated visual analysis of patterns in time series and text data – Workflow and application to financial data analysis</i>. Information Visualization, vol. 15, no. 1, pp. 75-90, 2016.",
		"url": "https://doi.org/10.1177/1473871615576925",
		"categories": ["event-analysis", "trend-analysis", "overview", "roi", "classification", "comparison", "navigation", "corpora", "time-series", "editorial-media", "2d", "line-plot", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Zhao2012_2",
		"title": "MoodLens",
		"year": 2012,
		"authors": "Jichang Zhao et al.",
		"reference": "Jichang Zhao, Li Dong, Junjie Wu, and Ke Xu. <i>MoodLens: an emoticon-based sentiment analysis system for Chinese tweets</i>. Proceedings of the ACM SIGKDD international conference on Knowledge discovery and data mining (KDD), pp. 1528-1531, 2012.",
		"url": "https://doi.org/10.1145/2339530.2339772",
		"categories": ["sentiment-analysis", "event-analysis", "trend-analysis", "overview", "roi", "classification", "comparison", "monitoring", "corpora", "streams", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "glyph", "linear", "radial"]
	},

	{
		"id": "Zhang2009",
		"title": "Sentiment Map",
		"year": 2009,
		"authors": "Jianwei Zhang et al.",
		"reference": "Jianwei Zhang, Yukiko Kawai, Tadahiko Kumamoto, and Katsumi Tanaka. <i>A Novel Visualization Method for Distinction of Web News Sentiment</i>. Proceedings of the International Conference on Web Information Systems Engineering (WISE), pp. 181-194, 2009.",
		"url": "https://doi.org/10.1007/978-3-642-04409-0_22",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "corpora", "time-series", "geospatial", "editorial-media", "2d", "line-plot", "maps", "linear"]
	},

	{
		"id": "Schaefer2010",
		"title": "Scientist's Workbench",
		"year": 2010,
		"authors": "Ulrich Schäfer and Christian Spurk",
		"reference": "Ulrich Schäfer and Christian Spurk. <i>TAKE Scientist's Workbench: Semantic Search and Citation-Based Visual Navigation in Scholar Papers</i>. Proceedings of the IEEE International Conference on Semantic Computing (ICSC), pp. 317-324, 2010.",
		"url": "https://doi.org/10.1109/ICSC.2010.40",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "time-series", "networks", "papers", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "Small2011",
		"title": "Maps of Science",
		"year": 2011,
		"authors": "Henry Small",
		"reference": "Henry Small. <i>Interpreting maps of science using citation context sentiments: a preliminary investigation</i>. Scientometrics, vol. 87, no. 2, pp.373-388, 2011.",
		"url": "https://doi.org/10.1007/s11192-011-0349-2",
		"categories": ["text-summarization", "sentiment-analysis", "stance-analysis", "relation-analysis", "overview", "classification", "comparison", "corpora", "networks", "papers", "2d", "node-link", "metric"]
	},

	{
		"id": "Hinrichs2016",
		"title": "Speculative W@nderverse",
		"year": 2016,
		"authors": "Uta Hinrichs, Stefania Forlini, and Bridget Moynihan",
		"reference": "Uta Hinrichs, Stefania Forlini, and Bridget Moynihan. <i>Speculative Practices: Utilizing InfoVis to Explore Untapped Literary Collections</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 429-438, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467452",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "time-series", "networks", "literature", "2d", "pixel-area", "node-link", "clouds", "text", "linear", "radial"]
	},

	{
		"id": "Alexander2016",
		"title": "Buddy Plots",
		"year": 2016,
		"authors": "Eric Alexander and Michael Gleicher",
		"reference": "Eric Alexander and Michael Gleicher. <i>Task-Driven Comparison of Topic Models</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 320-329, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467618",
		"categories": ["text-summarization", "relation-analysis", "translation-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "literature", "editorial-media", "papers", "2d", "glyph", "node-link", "linear"]
	},

	{
		"id": "Fulda2016",
		"title": "TimeLineCurator",
		"year": 2016,
		"authors": "Johanna Fulda, Matthew Brehmer, and Tamara Munzner",
		"reference": "Johanna Fulda, Matthew Brehmer, and Tamara Munzner. <i>TimeLineCurator: Interactive Authoring of Visual Timelines from Unstructured Text</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 300-309, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467531",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "document", "corpora", "time-series", "editorial-media", "2d", "glyph", "linear"]
	},

	{
		"id": "Brath2014_1",
		"title": "Skim Formatted Documents",
		"year": 2014,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Using Font Attributes in Knowledge Maps and Information Retrieval</i>. Proceedings of the Workshop on Knowledge Maps and Information Retrieval (KMIR) co-located with International Conference on Digital Libraries (DL), pp. 23-30, 2014.",
		"url": "http://ceur-ws.org/Vol-1311/paper3.pdf",
		"categories": ["lexical-analysis", "overview", "navigation", "document", "literature", "papers", "2d", "text"]
	},

	{
		"id": "Brath2014_2",
		"title": "Proportionally Encoded Quantities along Lines of Text",
		"year": 2014,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Using Font Attributes in Knowledge Maps and Information Retrieval</i>. Proceedings of the Workshop on Knowledge Maps and Information Retrieval (KMIR) co-located with International Conference on Digital Libraries (DL), pp. 23-30, 2014.",
		"url": "http://ceur-ws.org/Vol-1311/paper3.pdf",
		"categories": ["text-summarization", "overview", "comparison", "navigation", "corpora", "editorial-media", "literature", "papers", "2d", "text", "linear"]
	},

	{
		"id": "Willett2015",
		"title": "Note Spiral",
		"year": 2015,
		"authors": "Wesley Willett, Pascal Goffin, and Petra Isenberg",
		"reference": "Wesley Willett, Pascal Goffin, and Petra Isenberg. <i>Understanding Digital Note-Taking Practice for Visualization</i>. IEEE Computer Graphics and Applications, vol. 35, no. 4, pp. 38-51, 2015.",
		"url": "https://doi.org/10.1109/MCG.2015.52",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "corpora", "editorial-media", "2d", "glyph", "text", "radial", "metric"]
	},

	{
		"id": "Peter2015",
		"title": "Topicks",
		"year": 2015,
		"authors": "Jessica Peter et al.",
		"reference": "Jessica Peter, Steve Szigeti, Ana Jofre, and Sara Diamond. <i>Topicks: Visualizing complex topic models for user comprehension</i>. Poster Abstracts of IEEE VAST, pp. 207-208, 2015.",
		"url": "https://doi.org/10.1109/VAST.2015.7347681",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "editorial-media", "2d", "node-link", "clouds", "radial", "metric"]
	},

	{
		"id": "Dou2015",
		"title": "DemographicVis",
		"year": 2015,
		"authors": "Wenwen Dou et al.",
		"reference": "Wenwen Dou, Isaac Cho, Omar ElTayeby, Jaegul Choo, Xiaoyu Wang, and William Ribarsky. <i>DemographicVis: Analyzing demographic information based on user generated content</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 57-64, 2015.",
		"url": "https://doi.org/10.1109/VAST.2015.7347631",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Chen2016",
		"title": "Topic-Based Collaboration Visualization",
		"year": 2016,
		"authors": "Francine Chen, Patrick Chiu, and Seongtaek Lim",
		"reference": "Francine Chen, Patrick Chiu, and Seongtaek Lim. <i>Topic Modeling of Document Metadata for Visualizing Collaborations over Time</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 108-117, 2016.",
		"url": "https://doi.org/10.1145/2856767.2856787",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "corpora", "time-series", "papers", "2d", "node-link", "metric"]
	},

	{
		"id": "GraellsGarrido2016",
		"title": "Data Portraits",
		"year": 2016,
		"authors": "Eduardo Graells-Garrido, Mounia Lalmas, and Ricardo Baeza-Yates",
		"reference": "Eduardo Graells-Garrido, Mounia Lalmas, and Ricardo Baeza-Yates. <i>Data Portraits and Intermediary Topics: Encouraging Exploration of Politically Diverse Profiles</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 228-240, 2016.",
		"url": "https://doi.org/10.1145/2856767.2856776",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "corpora", "time-series", "social-media", "2d", "pixel-area", "clouds", "node-link", "linear", "metric"]
	},

	{
		"id": "Hoque2016",
		"title": "MultiConVis",
		"year": 2016,
		"authors": "Enamul Hoque and Giuseppe Carenini",
		"reference": "Enamul Hoque and Giuseppe Carenini. <i>MultiConVis: A Visual Text Analytics System for Exploring a Collection of Online Conversations</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 96-107, 2016.",
		"url": "https://doi.org/10.1145/2856767.2856782",
		"categories": ["text-summarization", "discourse-analysis", "sentiment-analysis", "overview", "classification", "navigation", "comparison", "corpora", "networks", "time-series", "social-media", "2d", "node-link", "text", "pixel-area", "linear", "radial", "metric"]
	},

	{
		"id": "Mahmud2016",
		"title": "Visual Analytics For Customer Intervention",
		"year": 2016,
		"authors": "Jalal Mahmud et al.",
		"reference": "Jalal Mahmud, Geli Fei, Anbang Xu, Aditya Pal, and Michelle Zhou. <i>Predicting Attitude and Actions of Twitter Users</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 2-6, 2016.",
		"url": "https://doi.org/10.1145/2856767.2856800",
		"categories": ["sentiment-analysis", "overview", "classification", "comparison", "navigation", "corpora", "social-media", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Thom2016",
		"title": "Event Digest",
		"year": 2016,
		"authors": "Dennis Thom, Robert Krüger, and Thomas Ertl",
		"reference": "Dennis Thom, Robert Krüger, and Thomas Ertl. <i>Can Twitter Save Lives? A Broad-Scale Study on Visual Social Media Analytics for Public Safety</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 7, pp. 1816-1829, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2511733",
		"categories": ["text-summarization", "event-analysis", "overview", "monitoring", "classification", "uncertainty", "streams", "geospatial", "time-series", "social-media", "2d", "line-plot", "clouds", "maps", "text", "linear", "metric"]
	},

	{
		"id": "Collins2007",
		"title": "Lattice Uncertainty Visualization",
		"year": 2007,
		"authors": "Christopher Collins, Sheelagh Carpendale, and Gerald Penn",
		"reference": "Christopher Collins, Sheelagh Carpendale, and Gerald Penn. <i>Visualization of Uncertainty in Lattices to Support Decision-Making</i>. Proceedings of the Eurographics/IEEE-VGTC Symposium on Visualization (EuroVis), pp. 51-58, 2007.",
		"url": "https://doi.org/10.2312/VisSym/EuroVis07/051-058",
		"categories": ["relation-analysis", "translation-analysis", "overview", "comparison", "uncertainty", "document", "2d", "node-link", "linear", "metric"]
	},

	{
		"id": "Zhao2013",
		"title": "PivotSlice",
		"year": 2013,
		"authors": "Jian Zhao et al.",
		"reference": "Jian Zhao, Christopher Collins, Fanny Chevalier, and Ravin Balakrishnan. <i>Interactive Exploration of Implicit and Explicit Relations in Faceted Datasets</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 19, no. 12, pp. 2080-2089, 2013.",
		"url": "https://doi.org/10.1109/TVCG.2013.167",
		"categories": ["trend-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "papers", "2d", "pixel-area", "node-link", "clouds", "linear"]
	},

	{
		"id": "Chang2013",
		"title": "Exploring Text Entities with Descriptive Non-photorealistic Rendering",
		"year": 2013,
		"authors": "Meng-Wei Chang and Christopher Collins",
		"reference": "Meng-Wei Chang and Christopher Collins. <i>Exploring Entities in Text with Descriptive Non-photorealistic Rendering</i>. Proceedings of the IEEE Pacific Visualization Symposium (PacificVis), pp. 9-16, 2013.",
		"url": "https://doi.org/10.1109/PacificVis.2013.6596122",
		"categories": ["trend-analysis", "relation-analysis", "lexical-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "reviews", "3d", "pixel-area", "text", "metric"]
	},

	{
		"id": "Kim2014_2",
		"title": "Lexichrome",
		"year": 2014,
		"authors": "Chris K. Kim and Christopher Collins",
		"reference": "Chris K. Kim and Christopher Collins. <i>Lexichrome: Examining Word-Color Associations with Visualization</i>. Poster Abstracts of IEEE VIS, 2014.",
		"url": "http://vialab.dc-uoit.net/wordpress/wp-content/papercite-data/pdf/Kim2014a.pdf",
		"categories": ["trend-analysis", "lexical-analysis", "classification", "document", "corpora", "literature", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "El-Assady2016",
		"title": "ConToVi",
		"year": 2016,
		"authors": "Mennatallah El-Assady et al.",
		"reference": "Mennatallah El-Assady, Valentin Gold, Carmela Acevedo, Christopher Collins, and Daniel Keim. <i>ConToVi: Multi-Party Conversation Exploration using Topic-Space Views</i>. Computer Graphics Forum, vol. 35, no. 3, pp. 431-440, 2016.",
		"url": "https://doi.org/10.1111/cgf.12919",
		"categories": ["text-summarization", "discourse-analysis", "sentiment-analysis", "stance-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "monitoring", "navigation", "corpora", "time-series", "communication", "2d", "line-plot", "glyph", "linear", "metric"]
	},

	{
		"id": "Jusufi2016",
		"title": "Student Blog Visualization",
		"year": 2016,
		"authors": "Ilir Jusufi, Marcelo Milrad, and Xurxo Legaspi",
		"reference": "Ilir Jusufi, Marcelo Milrad, and Xurxo Legaspi. <i>Interactive Exploration of Student Generated Content presented in Blogs</i>. Poster Abstracts of the Eurographics Conference on Visualization (EuroVis), pp. 53-55, 2016.",
		"url": "https://doi.org/10.2312/eurp.20161140",
		"categories": ["text-summarization", "overview", "comparison", "roi", "navigation", "corpora", "social-media", "2d", "pixel-area", "clouds", "text", "linear", "radial"]
	},

	{
		"id": "Lamqaddam2016",
		"title": "InVITe",
		"year": 2016,
		"authors": "Houda Lamqaddam and Jan Aerts",
		"reference": "Houda Lamqaddam and Jan Aerts. <i>InVITe - Towards Intuitive Visualization of Iterations over Text</i>. Poster Abstracts of the Eurographics Conference on Visualization (EuroVis), pp. 57-59, 2016.",
		"url": "https://doi.org/10.2312/eurp.20161141",
		"categories": ["translation-analysis", "overview", "comparison", "navigation", "document", "2d", "line-plot", "node-link", "glyph", "pixel-area", "linear"]
	},

	{
		"id": "Riehmann2016",
		"title": "Wikipedia Article Similarities Visualization",
		"year": 2016,
		"authors": "Patrick Riehmann et al.",
		"reference": "Patrick Riehmann, Martin Potthast, Henning Gruendl, Johannes Kiesel, Dean Jürges, Giuliano Castiglia, Bagrat Ter-Akopyan, and Bernd Froehlich. <i>Visualizing Article Similarities in Wikipedia</i>. Poster Abstracts of the Eurographics Conference on Visualization (EuroVis), pp. 69-71, 2016.",
		"url": "https://doi.org/10.2312/eurp.20161144",
		"categories": ["relation-analysis", "overview", "comparison", "roi", "navigation", "corpora", "networks", "social-media", "editorial-media", "2d", "node-link", "radial"]
	},

	{
		"id": "Szafir2016",
		"title": "TextDNA",
		"year": 2016,
		"authors": "Danielle Albers Szafir et al.",
		"reference": "Danielle Albers Szafir, Deidre Stuffer, Yusef Sohail, and Michael Gleicher. <i>TextDNA: Visualizing Word Usage with Configurable Colorfields</i>. Computer Graphics Forum, vol. 35, no. 3, pp. 421–430, 2016.",
		"url": "https://doi.org/10.1111/cgf.12918",
		"categories": ["lexical-analysis", "trend-analysis", "overview", "comparison", "roi", "navigation", "document", "corpora", "editorial-media", "literature", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Zhang2016",
		"title": "Multiscale Spatiotemporal Visual Analysis of Microblogs",
		"year": 2016,
		"authors": "Jiawei Zhang et al.",
		"reference": "Jiawei Zhang, Benjamin Ahlbrand, Abish Malik, Junghoon Chae, Zhiyu Min, Sungahn Ko, and David S. Ebert. <i>A Visual Analytics Framework for Microblog Data Analysis at Multiple Scales of Aggregation</i>. Computer Graphics Forum, vol. 35, no. 3, pp. 441–450, 2016.",
		"url": "https://doi.org/10.1111/cgf.12920",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "overview", "comparison", "roi", "classification", "monitoring", "navigation", "streams", "time-series", "geospatial", "social-media", "2d", "line-plot", "node-link", "glyph", "maps", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Zhao2016",
		"title": "Social Sentiment Sensor",
		"year": 2016,
		"authors": "Yanyan Zhao et al.",
		"reference": "Yanyan Zhao, Bing Qin, Ting Liu, Duyu Tang. <i>Social sentiment sensor: a visualization system for topic detection and topic sentiment analysis on microblog</i>. Multimedia Tools and Applications, vol. 75, no. 15, pp. 8843-8860, 2016.",
		"url": "https://doi.org/10.1007/s11042-014-2184-y",
		"categories": ["sentiment-analysis", "text-summarization", "trend-analysis", "overview", "classification", "navigation", "comparison", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "maps", "glyph", "pixel-area", "linear", "radial"]
	},

	{
		"id": "Krcadinac2016",
		"title": "Synemania",
		"year": 2016,
		"authors": "Uros Krcadinac et al.",
		"reference": "Uros Krcadinac, Jelena Jovanovic, Vladan Devedzic, and Philippe Pasquier. <i>Textual Affect Communication and Evocation Using Abstract Generative Visuals</i>. IEEE Transactions on Human-Machine Systems, vol. 46, no. 3, pp. 370-379, 2016.",
		"url": "https://doi.org/10.1109/THMS.2015.2504081",
		"categories": ["sentiment-analysis", "classification", "monitoring", "comparison", "document", "streams", "communication", "2d", "maps", "radial"]
	},

	{
		"id": "Li2016",
		"title": "VisTravel",
		"year": 2016,
		"authors": "Qiusheng Li et al.",
		"reference": "Qiusheng Li, Yadong Wu, Song Wang, Maosong Lin, Xinmiao Feng, and Haiyang Wang. <i>VisTravel: visualizing tourism network opinion from the user generated content</i>. Journal of Visualization, vol. 19, no. 3, pp. 489–502, 2016.",
		"url": "https://doi.org/10.1007/s12650-015-0330-x",
		"categories": ["sentiment-analysis", "text-summarization", "relation-analysis", "trend-analysis", "overview", "classification", "navigation", "comparison", "corpora", "time-series", "geospatial", "reviews", "2d", "line-plot", "pixel-area", "node-link", "maps", "clouds", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Brath2016_1",
		"title": "Typographic Venn Diagram",
		"year": 2016,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Typographic Sets: Labelled Set Elements with Font Attributes</i>. Proceedings of the International Workshop on Set Visualization and Reasoning (SetVR), pp. 29-43, 2016.",
		"url": "http://ceur-ws.org/Vol-1655/brath.pdf",
		"categories": ["relation-analysis","classification","comparison","overview","navigation","2d","text","linear","metric"]
	},

	{
		"id": "Brath2016_2",
		"title": "Typographic Set Graph",
		"year": 2016,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Typographic Sets: Labelled Set Elements with Font Attributes</i>. Proceedings of the International Workshop on Set Visualization and Reasoning (SetVR), pp. 29-43, 2016.",
		"url": "http://ceur-ws.org/Vol-1655/brath.pdf",
		"categories": ["sentiment-analysis","relation-analysis","classification","comparison","overview","navigation","document","corpora","2d","clouds","maps","text","metric"]
	},

	{
		"id": "Brath2016_3",
		"title": "Microtext Line Chart",
		"year": 2016,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Using Typography to Expand the Design Space of Data Visualization</i>. She Ji: The Journal of Design, Economics, and Innovation, vol. 2, no. 1, pp. 59-87, 2016.",
		"url": "https://doi.org/10.1016/j.sheji.2016.05.003",
		"categories": ["trend-analysis","comparison","overview","corpora","time-series","social-media","2d","line-plot","text","linear"]
	},

	{
		"id": "Brath2016_4",
		"title": "Typographic Mosaic Plot",
		"year": 2016,
		"authors": "Richard Brath and Ebad Banissi",
		"reference": "Richard Brath and Ebad Banissi. <i>Using Typography to Expand the Design Space of Data Visualization</i>. She Ji: The Journal of Design, Economics, and Innovation, vol. 2, no. 1, pp. 59-87, 2016.",
		"url": "https://doi.org/10.1016/j.sheji.2016.05.003",
		"categories": ["text-summarization","classification","comparison","overview","navigation","2d","pixel-area","text","linear","metric"]
	},

	{
		"id": "Asokarajan2016",
		"title": "Pixel-Based Text Analysis Tool",
		"year": 2016,
		"authors": "Bharathi Asokarajan et al.",
		"reference": "Bharathi Asokarajan, Ronak Etemadpour, June Abbas, Sam Huskey, and Chris Weaver. <i>Visualization of Latin Textual Variants using a Pixel-Based Text Analysis Tool</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), 2016.",
		"url": "https://doi.org/10.2312/eurova.20161119",
		"categories": ["lexical-analysis", "translation-analysis", "overview", "comparison", "classification", "navigation", "document", "literature", "2d", "pixel-area", "glyph", "text", "linear"]
	},

	{
		"id": "Liu2013",
		"title": "Co-trained Sentiment Classifier Visualization",
		"year": 2013,
		"authors": "Shenghua Liu et al.",
		"reference": "Shenghua Liu, Wenjun Zhu, Ning Xu, Fangtao Li, Xue-qi Cheng, Yue Liu, and Yuanzhuo Wang. <i>Co-training and Visualizing Sentiment Evolvement for Tweet Events</i>. Proceedings of the 22nd International Conference on World Wide Web (WWW '13 Companion), pp. 105-106, 2013.",
		"url": "https://doi.org/10.1145/2487788.2487836",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "monitoring", "streams", "time-series", "social-media", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Pupi2014",
		"title": "Ent-it-UP",
		"year": 2014,
		"authors": "Sara Pupi, Giulia Di Pietro, and Carlo Aliprandi",
		"reference": "Sara Pupi, Giulia Di Pietro, and Carlo Aliprandi. <i>Ent-it-UP</i>. HCI International 2014 – Posters' Extended Abstracts, pp. 3-8, 2014.",
		"url": "https://doi.org/10.1007/978-3-319-07854-0_1",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "corpora", "time-series", "social-media", "editorial-media", "2d", "line-plot", "pixel-area", "clouds", "text", "linear", "radial"]
	},

	{
		"id": "Cresci2014",
		"title": "Tour-pedia",
		"year": 2014,
		"authors": "Stefano Cresci et al.",
		"reference": "Stefano Cresci, Andrea D'Errico, Davide Gazzé, Angelica Lo Duca, Andrea Marchetti, and Maurizio Tesconi. <i>Tour-pedia: A Web Application for Sentiment Visualization in Tourism Domain</i>. Proceedings of the LREC 2014 OpeNER Workshop, pp. 18-21, 2014.",
		"url": "http://www.lrec-conf.org/proceedings/lrec2014/workshops/LREC2014Workshop-ComeHackwithOpeNER%20Proceeedings.pdf",
		"categories": ["sentiment-analysis", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "reviews", "2d", "maps", "glyph", "linear"]
	},

	{
		"id": "Chen2015",
		"title": "User Opinion Visualization",
		"year": 2015,
		"authors": "Yu-Sheng Chen et al.",
		"reference": "Yu-Sheng Chen, Lieu-Hen Chen, Toru Yamaguchi, and Yasufumi Takama. <i>Visualization System for Analyzing User Opinion</i>. Proceedings of the IEEE/SICE International Symposium on System Integration (SII), pp. 646-649, 2015.",
		"url": "https://doi.org/10.1109/SII.2015.7405055",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "overview", "comparison", "classification", "navigation", "document", "networks", "communication", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "Chi2015",
		"title": "Morphable Word Clouds",
		"year": 2015,
		"authors": "Ming-Te Chi et al.",
		"reference": "Ming-Te Chi, Shih-Syun Lin, Shiang-Yi Chen, Chao-Hung Lin, and Tong-Yee Lee. <i>Morphable Word Clouds for Time-Varying Text Data Visualization</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 21, no. 12, pp. 1415-1426, 2015.",
		"url": "https://doi.org/10.1109/TVCG.2015.2440241",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "document", "corpora", "time-series", "2d", "clouds", "text", "glyph", "metric"]
	},

	{
		"id": "Hennig2014",
		"title": "Sentimap",
		"year": 2014,
		"authors": "Patrick Hennig et al.",
		"reference": "Patrick Hennig, Philipp Berger, Christoph Meinel, Lukas Pirl, and Lukas Schulze. <i>Exploring emotions over time within the blogosphere</i>. Proceedings of the IEEE International Conference on Data Science and Advanced Analytics (DSAA), pp. 587-592, 2014.",
		"url": "https://doi.org/10.1109/DSAA.2014.7058131",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "social-media", "2d", "maps", "linear"]
	},

	{
		"id": "Bembenik2016",
		"title": "Proposals and Arguments Visualization",
		"year": 2016,
		"authors": "Robert Bembenik and Piotr Andruszkiewicz",
		"reference": "Robert Bembenik and Piotr Andruszkiewicz. <i>Towards Automatic Argument Extraction and Visualization in a Deliberative Model of Online Consultations for Local Governments</i>. Proceedings of the East European Conference on Advances in Databases and Information Systems (ADBIS), pp. 74-86, 2016.",
		"url": "https://doi.org/10.1007/978-3-319-44039-2_6",
		"categories": ["discourse-analysis", "sentiment-analysis", "stance-analysis", "relation-analysis", "overview", "comparison", "classification", "document", "networks", "social-media", "communication", "2d", "node-link", "text", "linear"]
	},

	{
		"id": "Cervantes2015",
		"title": "Sentiment Card",
		"year": 2015,
		"authors": "Ofelia Cervantes et al.",
		"reference": "Ofelia Cervantes, Francisco Gutiérrez, Ernesto Gutiérrez, Esteban Castillo, J. Alfredo Sánchez, and Wanggen Wan. <i>Expression: Visualizing Affective Content from Social Streams</i>. Proceedings of the Latin American Conference on Human Computer Interaction (CLIHC), 2015.",
		"url": "https://doi.org/10.1145/2824893.2824903",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "monitoring", "streams", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "glyph", "text", "linear"]
	},

	{
		"id": "Das2012",
		"title": "5W Summarization",
		"year": 2012,
		"authors": "Amitava Das, Sivaji Bandyopadhyay, and Björn Gambäck",
		"reference": "Amitava Das, Sivaji Bandyopadhyay, and Björn Gambäck. <i>Sentiment Analysis: What is the End User's Requirement?</i>. Proceedings of the International Conference on Web Intelligence, Mining and Semantics (WIMS), 2012.",
		"url": "https://doi.org/10.1145/2254129.2254173",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "communication", "2d", "line-plot", "pixel-area", "text", "linear", "radial"]
	},

	{
		"id": "Hennig2015",
		"title": "Cluster Heat Map",
		"year": 2015,
		"authors": "Patrick Hennig et al.",
		"reference": "Patrick Hennig, Philipp Berger, Maximilian Brehm, Bastien Grasnick, Jonathan Herdt, and Christoph Meinel. <i>Hot spot detection – An interactive cluster heat map for sentiment analysis</i>. Proceedings of the IEEE International Conference on Data Science and Advanced Analytics (DSAA), 2015.",
		"url": "https://doi.org/10.1109/DSAA.2015.7344885",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "social-media", "2d", "pixel-area", "node-link", "maps", "linear", "metric"]
	},

	{
		"id": "Brasoveanu2012",
		"title": "News Flow",
		"year": 2012,
		"authors": "Adrian M.P. Braşoveanu, Alexander Hubmann-Haidvogel, and Arno Scharl",
		"reference": "Adrian M.P. Braşoveanu, Alexander Hubmann-Haidvogel, and Arno Scharl. <i>Interactive visualization of emerging topics in multiple social media streams</i>. Proceedings of the International Working Conference on Advanced Visual Interfaces (AVI), pp. 530-533, 2012.",
		"url": "https://doi.org/10.1145/2254556.2254655",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "monitoring", "corpora", "time-series", "networks", "social-media", "2d", "pixel-area", "node-link", "linear"]
	},

	{
		"id": "Qiu2015",
		"title": "eduMRS - II",
		"year": 2015,
		"authors": "Robin G. Qiu, Ramya R. Ravi, and Lawrence L. Qiu",
		"reference": "Robin G. Qiu, Ramya R. Ravi, and Lawrence L. Qiu. <i>Aggregating and visualizing public opinions and sentiment trends on the US higher education</i>. Proceedings of the International Conference on Information Integration and Web-based Applications & Services (iiWAS), 2015.",
		"url": "https://doi.org/10.1145/2837185.2837261",
		"categories": ["text-summarization", "sentiment-analysis", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "social-media", "reviews", "2d", "maps", "glyph", "text", "linear"]
	},

	{
		"id": "Chen2015_2",
		"title": "LDA-Based Sentiment Visualization",
		"year": 2015,
		"authors": "Yu-Sheng Chen, Lieu-Hen Chen, and Yasufumi Takama",
		"reference": "Yu-Sheng Chen, Lieu-Hen Chen, and Yasufumi Takama. <i>Proposal of LDA-Based Sentiment Visualization of Hotel Reviews</i>. Proceedings of the IEEE International Conference on Data Mining Workshop (ICDMW), pp. 687-693, 2015.",
		"url": "https://doi.org/10.1109/ICDMW.2015.72",
		"categories": ["text-summarization", "sentiment-analysis", "overview", "comparison", "classification", "navigation", "corpora", "reviews", "2d", "text", "linear"]
	},

	{
		"id": "Dai2016",
		"title": "Sentiment Visualization with Weighted Word Embeddings",
		"year": 2016,
		"authors": "Xiangfeng Dai and Robert Prout",
		"reference": "Xiangfeng Dai and Robert Prout. <i>Unlocking Super Bowl Insights: Weighted Word Embeddings for Twitter Sentiment Classification</i>. Proceedings of the Multidisciplinary International Social Networks Conference, SocialInformatics, Data Science (MISNC, SI, DS), 2016.",
		"url": "https://doi.org/10.1145/2955129.2955148",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "glyph", "linear", "radial"]
	},

	{
		"id": "Tsirakis2017",
		"title": "PaloPro",
		"year": 2017,
		"authors": "Nikos Tsirakis et al.",
		"reference": "Nikos Tsirakis, Vasilis Poulopoulosa, Panagiotis Tsantilasa, and Iraklis Varlamis. <i>Large scale opinion mining for social, news and blog data</i>. Journal of Systems and Software, vol. 127, pp. 237-248, 2017.",
		"url": "https://doi.org/10.1016/j.jss.2016.06.012",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "streams", "time-series", "social-media", "editorial-media", "2d", "line-plot", "pixel-area", "text", "linear", "radial"]
	},

	{
		"id": "Zhao2016_2",
		"title": "Sentiment Visualization with a Parallel Coordinates Plot",
		"year": 2016,
		"authors": "Shuai Zhao et al.",
		"reference": "Shuai Zhao, Yunhai Tong, Xinhai Liu, and Shaohua Tan. <i>Correlating Twitter with the stock market through non-Gaussian SVAR</i>. Proceedings of the International Conference on the Advanced Computational Intelligence (ICACI), pp. 257-264, 2016.",
		"url": "https://doi.org/10.1109/ICACI.2016.7449835",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "corpora", "time-series", "social-media", "2d", "line-plot", "linear"]
	},

	{
		"id": "Sijtsma2016",
		"title": "Tweetviz",
		"year": 2016,
		"authors": "Bas Sijtsma, Pernilla Qvarfordt, and Francine Chen",
		"reference": "Bas Sijtsma, Pernilla Qvarfordt, and Francine Chen. <i>Tweetviz: Visualizing Tweets for Business Intelligence</i>. Proceedings of the International ACM SIGIR conference on Research and Development in Information Retrieval (SIGIR), pp. 1153-1156, 2016.",
		"url": "https://doi.org/10.1145/2911451.2911470",
		"categories": ["text-summarization", "sentiment-analysis", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "social-media", "2d", "maps", "glyph", "text", "linear"]
	},

	{
		"id": "Hoeber2016",
		"title": "Vista",
		"year": 2016,
		"authors": "Orland Hoeber et al.",
		"reference": "Orland Hoeber, Larena Hoeber, Maha El Meseery, Kenneth Odoh, and Radhika Gopi. <i>Visual Twitter Analytics (Vista): Temporally changing sentiment and the discovery of emergent themes within sport event tweets</i>. Online Information Review, vol. 40, no. 1, pp. 25-41, 2016.",
		"url": "https://doi.org/10.1108/OIR-02-2015-0067",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "event-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "maps", "glyph", "text", "linear"]
	},

	{
		"id": "Pino2016",
		"title": "GeoSentiment",
		"year": 2016,
		"authors": "Carmelo Pino, Isaak Kavasidis, and Concetto Spampinato",
		"reference": "Carmelo Pino, Isaak Kavasidis, and Concetto Spampinato. <i>GeoSentiment: a Tool for Analyzing Geographically Distributed Event-related Sentiments</i>. Proceedings of the IEEE Annual Consumer Communications Networking Conference (CCNC), pp. 270-271, 2016.",
		"url": "https://doi.org/10.1109/CCNC.2016.7444775",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "event-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "geospatial", "social-media", "editorial-media", "2d", "line-plot", "pixel-area", "maps", "linear"]
	},

	{
		"id": "Yu2016",
		"title": "Weibo Sentiment Visualization",
		"year": 2016,
		"authors": "Zhiwen Yu et al.",
		"reference": "Zhiwen Yu, Zhitao Wang, Liming Chen, Bin Guo, and Wenjie Li. <i>Featuring, Detecting, and Visualizing Human Sentiment in Chinese Micro-Blog</i>. ACM Transactions on Knowledge Discovery from Data (TKDD), vol. 10, no. 4, 2016.",
		"url": "https://doi.org/10.1145/2821513",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "clouds", "text", "linear", "radial"]
	},

	{
		"id": "Wu2012",
		"title": "City Flow",
		"year": 2012,
		"authors": "Jiayu Wu et al.",
		"reference": "Jiayu Wu, Zhiyong Fu, Zhiyuan Liu, Jiajia Pan, Huiling Long, Xu Lin, Haoqing He, Xinxiong Chen, and Jiayu Tang. <i>City Flow: Prototype Exploration for Visualizing Urban Traffic Conversations</i>. Proceedings of the International Conference on Privacy, Security, Risk and Trust (PASSAT) and the International Conference on Social Computing (SocialCom), pp. 481-489, 2012.",
		"url": "https://doi.org/10.1109/SocialCom-PASSAT.2012.40",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "clouds", "linear"]
	},

	{
		"id": "Wu2013",
		"title": "City Sentiment",
		"year": 2013,
		"authors": "Jiayu Wu et al.",
		"reference": "Jiayu Wu, Zhiyong Fu, Zhiyuan Liu, Xu Lin, Jiayu Tang, Jiajia Pan, and Chen Zhao. <i>Creating reflections in public emotion visualization: prototype exploration on traffic theme</i>. Proceedings of the ACM Conference on Creativity & Cognition (C&C), pp. 357-361, 2013.",
		"url": "https://doi.org/10.1145/2466627.2466671",
		"categories": ["text-summarization", "sentiment-analysis", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "social-media", "2d", "pixel-area", "glyph", "linear", "radial"]
	},

	{
		"id": "Brooks2015",
		"title": "FeatureInsight",
		"year": 2015,
		"authors": "Michael Brooks et al.",
		"reference": "Michael Brooks, Saleema Amershi, Bongshin Lee, Steven M. Drucker, Ashish Kapoor, and Patrice Simard. <i>FeatureInsight: Visual Support for Error-Driven Feature Ideation in Text Classification</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 105-112, 2015.",
		"url": "https://doi.org/10.1109/VAST.2015.7347637",
		"categories": ["text-summarization", "lexical-analysis", "overview", "comparison", "classification", "roi", "corpora", "2d", "pixel-area", "text", "linear", "metric"]
	},

	{
		"id": "DiSciascio2015",
		"title": "uRank",
		"year": 2015,
		"authors": "Cecilia di Sciascio, Vedran Sabol, and Eduardo Veas",
		"reference": "Cecilia di Sciascio, Vedran Sabol, and Eduardo Veas. <i>uRank: Visual Analytics Approach for Search Result Exploration</i>. Poster Abstracts of IEEE VAST, pp. 217-218, 2015.",
		"url": "https://doi.org/10.1109/VAST.2015.7347686",
		"categories": ["text-summarization", "lexical-analysis", "overview", "comparison", "classification", "navigation", "document", "corpora", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Dong2015",
		"title": "HTMVS",
		"year": 2015,
		"authors": "Haoling Dong et al.",
		"reference": "Haoling Dong, Siliang Tang, Si Li, Fei Wu, and Yueting Zhuang. <i>HTMVS: Visualizing Hierarchical Topics and Their Evolution</i>. Poster Abstracts of IEEE VAST, pp. 195-196, 2015.",
		"url": "https://doi.org/10.1109/VAST.2015.7347675",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "editorial-media", "2d", "pixel-area", "clouds", "text", "linear", "radial"]
	},

	{
		"id": "Mohammad2016",
		"title": "SemEval-2016 Stance Dataset Visualization",
		"year": 2016,
		"authors": "Saif M. Mohammad et al.",
		"reference": "Saif M. Mohammad, Svetlana Kiritchenko, Parinaz Sobhani, Xiaodan Zhu, and Colin Cherry. <i>Semeval-2016 Task 6: Detecting Stance in Tweets</i>. Proceedings of the International Workshop on Semantic Evaluation (SemEval), 2016.",
		"url": "http://saifmohammad.com/WebPages/StanceDataset.htm",
		"categories": ["text-summarization", "sentiment-analysis", "stance-analysis", "overview", "comparison", "classification", "navigation", "corpora", "social-media", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Hetzler1998_1",
		"title": "Cosmic Tumbleweed",
		"year": 1998,
		"authors": "Beth Hetzler et al.",
		"reference": "Beth Hetzler, Paul Whitney, Lou Martucci, and Jim Thomas. <i>Multi-faceted Insight through Interoperable Visual Information Analysis Paradigms</i>. Proceedings of the IEEE Symposium on Information Visualization (InfoVis), pp. 137-144, 1998.",
		"url": "https://doi.org/10.1109/INFVIS.1998.729570",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "networks", "3d", "clouds", "maps", "metric"]
	},

	{
		"id": "Hetzler1998_2",
		"title": "32D Hypercube",
		"year": 1998,
		"authors": "Beth Hetzler et al.",
		"reference": "Beth Hetzler, Paul Whitney, Lou Martucci, and Jim Thomas. <i>Multi-faceted Insight through Interoperable Visual Information Analysis Paradigms</i>. Proceedings of the IEEE Symposium on Information Visualization (InfoVis), pp. 137-144, 1998.",
		"url": "https://doi.org/10.1109/INFVIS.1998.729570",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "3d", "clouds", "metric"]
	},

	{
		"id": "Hetzler1998_3",
		"title": "Starstruck",
		"year": 1998,
		"authors": "Beth Hetzler et al.",
		"reference": "Beth Hetzler, Paul Whitney, Lou Martucci, and Jim Thomas. <i>Multi-faceted Insight through Interoperable Visual Information Analysis Paradigms</i>. Proceedings of the IEEE Symposium on Information Visualization (InfoVis), pp. 137-144, 1998.",
		"url": "https://doi.org/10.1109/INFVIS.1998.729570",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "3d", "clouds", "glyph", "radial", "metric"]
	},

	{
		"id": "Soto2015",
		"title": "ViTA-SSD",
		"year": 2015,
		"authors": "Axel J. Soto et al.",
		"reference": "Axel J. Soto, Ryan Kiros, Vlado Kešelj, and Evangelos Milios. <i>Exploratory Visual Analysis and Interactive Pattern Extraction from Semi-Structured Data</i>. ACM Transactions on Interactive Intelligent Systems, vol. 5, no. 3, 2015.",
		"url": "https://doi.org/10.1145/2812115",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "networks", "2d", "pixel-area", "node-link", "clouds", "text", "radial", "metric"]
	},

	{
		"id": "Wang2016",
		"title": "Narrative Visualization for Scientific Literature Review",
		"year": 2016,
		"authors": "Yun Wang et al.",
		"reference": "Yun Wang, Dongyu Liu, Huamin Qu, Qiong Luo, and Xiaojuan Ma. <i>A Guided Tour of Literature Review: Facilitating Academic Paper Reading with Narrative Visualization</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 17-24, 2016.",
		"url": "https://doi.org/10.1145/2968220.2968242",
		"categories": ["relation-analysis", "trend-analysis", "sentiment-analysis", "overview", "comparison", "classification", "navigation", "document", "corpora", "networks", "papers", "2d", "pixel-area", "node-link", "clouds", "text", "linear"]
	},

	{
		"id": "Hearst1994",
		"title": "Cougar",
		"year": 1994,
		"authors": "Marti A. Hearst",
		"reference": "Marti A. Hearst. <i>Using categories to provide context for full-text retrieval results</i>. Proceedings of the Conference on Intelligent Multimedia Information Retrieval Systems and Management (RIAO), vol. 1, pp. 115-130, 1994.",
		"url": "http://dl.acm.org/citation.cfm?id=2856835",
		"categories": ["text-summarization", "relation-analysis", "classification", "overview", "comparison", "navigation", "corpora", "2d", "pixel-area", "text", "metric"]
	},

	{
		"id": "Jones1998",
		"title": "VQuery",
		"year": 1998,
		"authors": "Steve Jones",
		"reference": "Steve Jones. <i>Graphical Query Specification and Dynamic Result Previews for a Digital Library</i>. Proceedings of the Annual ACM Symposium on User Interface Software and Technology (UIST), pp. 143-151, 1998.",
		"url": "https://doi.org/10.1145/288392.288595",
		"categories": ["text-summarization", "relation-analysis", "classification", "overview", "comparison", "navigation", "corpora", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "He2016",
		"title": "Spatiotemporal Analytics of Topic Trajectory",
		"year": 2016,
		"authors": "Jiangen He and Chaomei Chen",
		"reference": "Jiangen He and Chaomei Chen. <i>Spatiotemporal Analytics of Topic Trajectory</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 112-116, 2016.",
		"url": "https://doi.org/10.1145/2968220.2968244",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "geospatial", "time-series", "2d", "line-plot", "pixel-area", "node-link", "maps", "clouds", "glyph", "linear", "radial"]
	},

	{
		"id": "Ji2016",
		"title": "VIBES",
		"year": 2016,
		"authors": "Wenqian Ji et al.",
		"reference": "Wenqian Ji, Yan Tang, Pengju Ma, Shijie Tang, Zhipeng Fang, Xuan Li, and Tianjian Chen. <i>A Hybrid Approach for Event Social Influence Visualization</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 112-116, 2016.",
		"url": "https://doi.org/10.1145/2968220.2968246",
		"categories": ["event-analysis", "trend-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "maps", "linear"]
	},

	{
		"id": "Dehiya2016",
		"title": "Visual Analysis of Hillary Clinton's Emails",
		"year": 2016,
		"authors": "Vasundhara Dehiya and Klaus Mueller",
		"reference": "Vasundhara Dehiya and Klaus Mueller. <i>Analyzing Hillary Clinton's Emails</i>. Poster Abstracts of IEEE VIS, 2016.",
		"url": "http://www3.cs.stonybrook.edu/~mueller/papers/Analyzing%20Hillary%20Clinton%20Emails%20VIS%202016.pdf",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "corpora", "time-series", "communication", "2d", "line-plot", "pixel-area", "linear"]
	},

	{
		"id": "Kwon2016",
		"title": "VisOHC",
		"year": 2016,
		"authors": "Bum Chul Kwon et al.",
		"reference": "Bum Chul Kwon, Sung-Hee Kim, Sukwon Lee, Jaegul Choo, Jina Huh, and Ji Soo Yi. <i>VisOHC: Designing Visual Analytics for Online Health Communities</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 1, pp. 71-80, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2467555",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "roi", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "pixel-area", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Wang2016_2",
		"title": "IdeaFlow",
		"year": 2016,
		"authors": "Xiting Wang et al.",
		"reference": "Xiting Wang, Shixia Liu, Yang Chen, Tai-Quan Peng, Jing Su, Jing Yang, and Baining Guo. <i>How Ideas Flow across Multiple Social Groups</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 51-60, 2016.",
		"url": "https://doi.org/10.1109/VAST.2016.7883511",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "line-plot", "node-link", "clouds", "maps", "glyph", "metric"]
	},

	{
		"id": "Fu2017",
		"title": "iForum",
		"year": 2017,
		"authors": "Siwei Fu et al.",
		"reference": "Siwei Fu, Jian Zhao, Weiwei Cui, and Huamin Qu. <i>Visual Analysis of MOOC Forums with iForum</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 201-210, 2017.",
		"url": "https://doi.org/10.1109/TVCG.2016.2598444",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "node-link", "clouds", "glyph", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Liu2016_2",
		"title": "BrandWheel",
		"year": 2016,
		"authors": "Xiaotong Liu et al.",
		"reference": "Xiaotong Liu, Anbang Xu, Liang Gou, Haibin Liu, Rama Akkiraju, and Han-Wei Shen. <i>SocialBrands: Visual Analysis of Public Perceptions of Brands on Social Media</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 71-80, 2016.",
		"url": "https://doi.org/10.1109/VAST.2016.7883513",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "networks", "social-media", "reviews", "2d", "pixel-area", "text", "radial", "linear"]
	},

	{
		"id": "Liu2016_3",
		"title": "BrandSediments",
		"year": 2016,
		"authors": "Xiaotong Liu et al.",
		"reference": "Xiaotong Liu, Anbang Xu, Liang Gou, Haibin Liu, Rama Akkiraju, and Han-Wei Shen. <i>SocialBrands: Visual Analysis of Public Perceptions of Brands on Social Media</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 71-80, 2016.",
		"url": "https://doi.org/10.1109/VAST.2016.7883513",
		"categories": ["sentiment-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "networks", "social-media", "reviews", "2d", "glyph", "clouds", "linear", "metric"]
	},

	{
		"id": "Heimerl2012",
		"title": "Visual Classifier Training for Text Document Retrieval",
		"year": 2012,
		"authors": "Florian Heimerl et al.",
		"reference": "Florian Heimerl, Steffen Koch, Harald Bosch, and Thomas Ertl. <i>Visual Classifier Training for Text Document Retrieval</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 18, no. 12, pp. 2839-2848, 2012.",
		"url": "https://doi.org/10.1109/TVCG.2012.277",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "papers", "2d", "pixel-area", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Heimerl2014",
		"title": "Word Cloud Explorer",
		"year": 2014,
		"authors": "Florian Heimerl et al.",
		"reference": "Florian Heimerl, Steffen Lohmann, Simon Lange, and Thomas Ertl. <i>Word Cloud Explorer: Text Analytics Based on Word Clouds</i>. Proceedings of the Hawaii International Conference on System Sciences (HICSS), pp. 1833-1842, 2014.",
		"url": "https://doi.org/10.1109/HICSS.2014.231",
		"categories": ["text-summarization", "lexical-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "literature", "papers", "editorial-media", "2d", "clouds", "text", "linear", "radial"]
	},

	{
		"id": "Heimerl2016_2",
		"title": "DocuCompass",
		"year": 2016,
		"authors": "Florian Heimerl et al.",
		"reference": "Florian Heimerl, Markus John, Qi Han, Steffen Koch, and Thomas Ertl. <i>DocuCompass: Effective Exploration of Document Landscapes</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), pp. 11-20, 2016.",
		"url": "https://doi.org/10.1109/VAST.2016.7883507",
		"categories": ["text-summarization", "lexical-analysis", "roi", "classification", "comparison", "overview", "navigation", "corpora", "papers", "editorial-media", "2d", "clouds", "text", "glyph", "linear", "radial", "metric"]
	},

	{
		"id": "Koch2011",
		"title": "PatViz",
		"year": 2011,
		"authors": "Steffen Koch et al.",
		"reference": "Steffen Koch, Harald Bosch, Mark Giereth, and Thomas Ertl. <i>Iterative Integration of Visual Insights during Scalable Patent Search and Analysis</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 17, no. 5, pp. 557-569, 2011.",
		"url": "https://doi.org/10.1109/TVCG.2010.85",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "patents", "2d", "3d", "pixel-area", "node-link", "maps", "text", "glyph", "linear", "metric"]
	},

	{
		"id": "Hong2016",
		"title": "TED Talks' Relativity Visualization",
		"year": 2016,
		"authors": "Sarah Hong, Yuyi Liu, and Zhao Xiao",
		"reference": "Sarah Hong, Yuyi Liu, and Zhao Xiao. <i>Visual Analysis of TED Talk Topic Trends</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 150-151, 2016.",
		"url": "https://doi.org/10.1145/2968220.2972225",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "corpora", "networks", "editorial-media", "2d", "node-link", "radial"]
	},

	{
		"id": "Sun2016",
		"title": "EduVis",
		"year": 2016,
		"authors": "Kai Sun et al.",
		"reference": "Kai Sun, Yuhua Liu, Zongchao Guo, and Changbo Wang. <i>EduVis: Visualization for Education Knowledge Graph Based on Web Data</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 138-139, 2016.",
		"url": "https://doi.org/10.1145/2968220.2968227",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "editorial-media", "2d", "node-link", "clouds", "text", "radial", "linear"]
	},

	{
		"id": "Liu2016_4",
		"title": "TopicStream",
		"year": 2016,
		"authors": "Shixia Liu et al.",
		"reference": "Shixia Liu, Jialun Yin, Xiting Wang, Weiwei Cui, Kelei Cao, and Jian Pei. <i>Online Visual Analytics of Text Streams</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 22, no. 11, pp. 2451-2466, 2016.",
		"url": "https://doi.org/10.1109/TVCG.2015.2509990",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "monitoring", "corpora", "streams", "time-series", "networks", "social-media", "editorial-media", "2d", "line-plot", "node-link", "clouds", "glyph", "text", "radial", "metric"]
	},

	{
		"id": "Liu2015_2",
		"title": "Multifaceted Viewing of Word Clouds",
		"year": 2015,
		"authors": "Xiaotong Liu, Han-Wei Shen, and Yifan Hu",
		"reference": "Xiaotong Liu, Han-Wei Shen, and Yifan Hu. <i>Supporting multifaceted viewing of word clouds with focus+context display</i>. Information Visualization, vol. 14, no. 2, pp. 168-180, 2015.",
		"url": "https://doi.org/10.1177/1473871614534095",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "corpora", "2d", "clouds", "text", "metric"]
	},

	{
		"id": "Tat2002",
		"title": "Bubba Talk",
		"year": 2002,
		"authors": "Annie Tat and Sheelagh Carpendale",
		"reference": "Annie Tat and Sheelagh Carpendale. <i>Visualising human dialog</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 16-21, 2002.",
		"url": "https://doi.org/10.1109/IV.2002.1028751",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "monitoring", "corpora", "time-series", "communication", "2d", "clouds", "glyph", "metric"]
	},

	{
		"id": "Plaisant2006",
		"title": "Nora",
		"year": 2006,
		"authors": "Catherine Plaisant et al.",
		"reference": "Catherine Plaisant, James Rose, Bei Yu, Loretta Auvil, Matthew G. Kirschenbaum, Martha Nell Smith, Tanya Clement, and Greg Lord. <i>Exploring erotics in Emily Dickinson's correspondence with text mining and visual interfaces</i>. Proceedings of the ACM/IEEE-CS joint conference on Digital libraries (JCDL), pp. 141-150, 2006.",
		"url": "https://doi.org/10.1145/1141753.1141781",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "time-series", "communication", "2d", "pixel-area", "clouds", "text", "linear"]
	},

	{
		"id": "Eick2006",
		"title": "AFEWeb",
		"year": 2006,
		"authors": "Stephen G. Eick, Justin Mauger, and Alan Ratner",
		"reference": "Stephen G. Eick, Justin Mauger, and Alan Ratner. <i>Visualizing the Performance of Computational Linguistics Algorithms</i>. Proceedings of the IEEE Symposium on Visual Analytics Science and Technology (VAST), pp. 151-157, 2006.",
		"url": "https://doi.org/10.1109/VAST.2006.261417",
		"categories": ["text-summarization", "relation-analysis", "lexical-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "2d", "line-plot", "pixel-area", "text", "linear"]
	},

	{
		"id": "Wong2003",
		"title": "Dynamic Visualization of Transient Data Streams",
		"year": 2003,
		"authors": "Pak Chung Wong et al.",
		"reference": "Pak Chung Wong, Harlan Foote, Dan Adams, Wendy Cowley, and Jim Thomas. <i>Dynamic Visualization of Transient Data Streams</i>. Proceedings of the IEEE Symposium on Information Visualization (INFOVIS), pp. 97-104, 2003.",
		"url": "https://doi.org/10.1109/INFVIS.2003.1249014",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "monitoring", "corpora", "streams", "editorial-media", "2d", "clouds", "metric"]
	},

	{
		"id": "Landauer2004",
		"title": "LSA Visualization",
		"year": 2004,
		"authors": "Thomas K. Landauer, Darrell Laham, and Marcia Derr",
		"reference": "Thomas K. Landauer, Darrell Laham, and Marcia Derr. <i>From paragraph to graph: Latent semantic analysis for information visualization</i>. Proceedings of the National Academy of Sciences of the USA (PNAS), vol. 101, no. Suppl. 1, pp. 5214-5219, 2004.",
		"url": "https://doi.org/10.1073/pnas.0400341101",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "corpora", "papers", "2d", "clouds", "metric"]
	},

	{
		"id": "Chi2006",
		"title": "ScentIndex",
		"year": 2006,
		"authors": "Ed H. Chi et al.",
		"reference": "Ed H. Chi, Lichan Hong, Julie Heiser, and Stuart K. Card. <i>Scentindex: Conceptually Reorganizing Subject Indexes for Reading</i>. Proceedings of the IEEE Symposium on Visual Analytics Science and Technology (VAST), pp. 159-166, 2006.",
		"url": "https://doi.org/10.1109/VAST.2006.261418",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "navigation", "document", "literature", "2d", "3d", "text", "linear"]
	},

	{
		"id": "Shen2017",
		"title": "NameClarifier",
		"year": 2017,
		"authors": "Qiaomu Shen et al.",
		"reference": "Qiaomu Shen, Tongshuang Wu, Haiyan Yang, Yanhong Wu, Huamin Qu, and Weiwei Cui. <i>NameClarifier: A Visual Analytics System for Author Name Disambiguation</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 141-150, 2017.",
		"url": "https://doi.org/10.1109/TVCG.2016.2598465",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "time-series", "networks", "papers", "2d", "line-plot", "pixel-area", "node-link", "glyph", "linear", "radial"]
	},

	{
		"id": "Berger2017",
		"title": "cite2vec",
		"year": 2017,
		"authors": "Matthew Berger, Katherine McDonough, and Lee M. Seversky",
		"reference": "Matthew Berger, Katherine McDonough, and Lee M. Seversky. <i>cite2vec: Citation-Driven Document Exploration via Word Embeddings</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 691-700, 2017.",
		"url": "https://doi.org/10.1109/TVCG.2016.2598667",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "networks", "papers", "2d", "node-link", "clouds", "text", "metric"]
	},

	{
		"id": "Hu2017",
		"title": "SentenTree",
		"year": 2017,
		"authors": "Mengdie Hu, Krist Wongsuphasawat, and John Stasko",
		"reference": "Mengdie Hu, Krist Wongsuphasawat, and John Stasko. <i>Visualizing Social Media Content with SentenTree</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 621-630, 2017.",
		"url": "https://doi.org/10.1109/TVCG.2016.2598590",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "comparison", "navigation", "corpora", "networks", "social-media", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "Kim2017",
		"title": "TopicLens",
		"year": 2017,
		"authors": "Minjeong Kim et al.",
		"reference": "Minjeong Kim, Kyeongpil Kang, Deokgun Park, Jaegul Choo, and Niklas Elmqvist. <i>TopicLens: Efficient Multi-Level Visual Topic Exploration of Large-Scale Document Collections</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 151-160, 2017.",
		"url": "https://doi.org/10.1109/TVCG.2016.2598445",
		"categories": ["text-summarization", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "networks", "2d", "node-link", "clouds", "text", "metric"]
	},

	{
		"id": "Felix2017",
		"title": "TextTile",
		"year": 2017,
		"authors": "Cristian Felix, Anshul Vikram Pandey, and Enrico Bertini",
		"reference": "Cristian Felix, Anshul Vikram Pandey, and Enrico Bertini. <i>TextTile: An Interactive Visualization Tool for Seamless Exploratory Analysis of Structured Data and Unstructured Text</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 161-170, 2017.",
		"url": "https://doi.org/10.1109/TVCG.2016.2598447",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "navigation", "corpora", "geospatial", "2d", "pixel-area", "maps", "text", "linear"]
	},

	{
		"id": "Viegas2006",
		"title": "Themail",
		"year": 2006,
		"authors": "Fernanda B. Viégas, Scott Golder, and Judith Donath",
		"reference": "Fernanda B. Viégas, Scott Golder, and Judith Donath. <i>Visualizing Email Content: Portraying Relationships from Conversational Histories</i>. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI), pp. 979-988, 2006.",
		"url": "https://doi.org/10.1145/1124772.1124919",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "networks", "communication", "2d", "glyph", "text", "linear"]
	},

	{
		"id": "Gilbert2007",
		"title": "CodeSaw",
		"year": 2007,
		"authors": "Eric Gilbert and Karrie Karahalios",
		"reference": "Eric Gilbert and Karrie Karahalios. <i>CodeSaw: A Social Visualization of Distributed Software Development</i>. Proceedings of the IFIP TC 13 International Conference on Human-Computer Interaction (INTERACT), pp. 303-316, 2007.",
		"url": "https://doi.org/10.1007/978-3-540-74800-7_25",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "communication", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Ishikawa2007",
		"title": "T-Scroll",
		"year": 2007,
		"authors": "Yoshiharu Ishikawa and Mikine Hasegawa",
		"reference": "Yoshiharu Ishikawa and Mikine Hasegawa. <i>T-Scroll: Visualizing Trends in a Time-Series of Documents for Interactive User Exploration</i>. Proceedings of the International Conference on Theory and Practice of Digital Libraries (ECDL), pp. 235-246, 2007.",
		"url": "https://doi.org/10.1007/978-3-540-74851-9_20",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "networks", "editorial-media", "2d", "node-link", "text", "linear", "metric"]
	},

	{
		"id": "Pan2007",
		"title": "TextPlorer",
		"year": 2007,
		"authors": "Chi-Chun Pan et al.",
		"reference": "Chi-Chun Pan, Anuj R. Jaiswal, Junyan Luo, Anthony Robinson. <i>TextPlorer: An application supporting text analysis</i>. Proceedings of the IEEE Symposium on Visual Analytics Science and Technology (VAST), pp. 205-206, 2007.",
		"url": "https://doi.org/10.1109/VAST.2007.4389019",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "event-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "networks", "geospatial", "social-media", "editorial-media", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Swan2000",
		"title": "TimeMine",
		"year": 2000,
		"authors": "Russell Swan and James Allan",
		"reference": "Russell Swan and James Allan. <i>Automatic Generation of Overview Timelines</i>. Proceedings of the Annual International ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR), pp. 49-56, 2000.",
		"url": "https://doi.org/10.1145/345508.345546",
		"categories": ["text-summarization", "event-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "editorial-media", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Schubert2014",
		"title": "SigniTrend",
		"year": 2014,
		"authors": "Erich Schubert, Michael Weiler, and Hans-Peter Kriegel",
		"reference": "Erich Schubert, Michael Weiler, and Hans-Peter Kriegel. <i>SigniTrend: Scalable Detection of Emerging Topics in Textual Streams by Hashed Significance Thresholds</i>. Proceedings of the ACM SIGKDD international conference on Knowledge discovery and data mining (KDD), pp. 871-880, 2014.",
		"url": "https://doi.org/10.1145/2623330.2623740",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "relation-analysis", "overview", "classification", "comparison", "roi", "monitoring", "navigation", "corpora", "streams", "time-series", "networks", "social-media", "editorial-media", "2d", "line-plot", "pixel-area", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Schubert2016",
		"title": "SPOTHOT",
		"year": 2016,
		"authors": "Erich Schubert, Michael Weiler, and Hans-Peter Kriegel",
		"reference": "Erich Schubert, Michael Weiler, and Hans-Peter Kriegel. <i>SPOTHOT: Scalable Detection of Geo-spatial Events in Large Textual Streams</i>. Proceedings of the International Conference on Scientific and Statistical Database Management (SSDBM), 2016.",
		"url": "https://doi.org/10.1145/2949689.2949699",
		"categories": ["text-summarization", "event-analysis", "trend-analysis", "overview", "classification", "comparison", "roi", "monitoring", "navigation", "corpora", "streams", "time-series", "geospatial", "social-media", "2d", "line-plot", "node-link", "clouds", "maps", "text", "linear"]
	},

	{
		"id": "Ruppert2016",
		"title": "PolicyLine",
		"year": 2016,
		"authors": "Tobias Ruppert et al.",
		"reference": "Tobias Ruppert, Andreas Bannach, Jürgen Bernard, Hendrik Lücke-Tieke, Alex Ulmer, and Jörn Kohlhammer. <i>Supporting Collaborative Political Decision Making: An Interactive Policy Process Visualization System</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 104-111, 2016.",
		"url": "https://doi.org/10.1145/2968220.2968223",
		"categories": ["sentiment-analysis", "event-analysis", "overview", "classification", "comparison", "navigation", "document", "corpora", "time-series", "communication", "editorial-media", "2d", "clouds", "glyph", "text", "linear"]
	},

	{
		"id": "Calderon2014",
		"title": "Visualization of Emergency-Related Tweets",
		"year": 2014,
		"authors": "Nadya A. Calderon, Richard Arias-Hernandez, and Brian Fisher",
		"reference": "Nadya A. Calderon, Richard Arias-Hernandez, and Brian Fisher. <i>Studying Animation for Real-Time Visual Analytics: A Design Study of Social Media Analytics in Emergency Management</i>. Proceedings of the Hawaii International Conference on System Sciences (HICSS), pp. 1364-1373, 2014.",
		"url": "https://doi.org/10.1109/HICSS.2014.176",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "monitoring", "classification", "comparison", "corpora", "streams", "time-series", "social-media", "2d", "line-plot", "glyph", "linear"]
	},

	{
		"id": "Caragea2014",
		"title": "Mood Mapping for Disaster Response",
		"year": 2014,
		"authors": "Cornelia Caragea et al.",
		"reference": "Cornelia Caragea, Anna Cinzia Squicciarini, Sam Stehle, Kishore Neppalli, and Andrea H. Tapia. <i>Mapping Moods: Geo-Mapped Sentiment Analysis During Hurricane Sandy</i>. Proceedings of the International Conference on Information Systems for Crisis Response and Management (ISCRAM), 2014.",
		"url": "http://www.iscram.org/legacy/ISCRAM2014/papers/p29.pdf",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "clouds", "glyph", "linear"]
	},

	{
		"id": "Torkildson2014",
		"title": "Oil Spill Visualization",
		"year": 2014,
		"authors": "Megan K. Torkildson, Kate Starbird, and Cecilia Aragon",
		"reference": "Megan K. Torkildson, Kate Starbird, and Cecilia Aragon. <i>Analysis and Visualization of Sentiment and Emotion on Crisis Tweets</i>. Proceedings of the International Conference on Cooperative Design, Visualization, and Engineering (CDVE), pp. 64-67, 2014.",
		"url": "https://doi.org/10.1007/978-3-319-10831-5_9",
		"categories": ["sentiment-analysis", "stance-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "linear"]
	},

	{
		"id": "Lu2015",
		"title": "Sentiment Visualization of Geo-Located Twitter Data",
		"year": 2015,
		"authors": "Yafeng Lu et al.",
		"reference": "Yafeng Lu, Xia Hu, Feng Wang, Shamanth Kumar, Huan Liu, and Ross Maciejewski. <i>Visualizing Social Media Sentiment in Disaster Scenarios</i>. Proceedings of the International Conference on World Wide Web (WWW), pp. 1211-1215, 2015.",
		"url": "https://doi.org/10.1145/2740908.2741720",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "uncertainty", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "maps", "glyph", "text", "linear"]
	},

	{
		"id": "Chen2017",
		"title": "Lariat",
		"year": 2017,
		"authors": "Nan-Chen Chen et al.",
		"reference": "Nan-Chen Chen, Michael Brooks, Rafal Kocielnik, Sungsoo (Ray) Hong, Jeff Smith, Sanny Lin, Zening Qu, and Cecilia Aragon. <i>Lariat: A Visual Analytics Tool for Social Media Researchers to Explore Twitter Datasets</i>. Proceedings of the Hawaii International Conference on System Sciences (HICSS), pp. 1881-1890, 2017.",
		"url": "https://doi.org/10.24251/HICSS.2017.228",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "pixel-area", "text", "linear"]
	},

	{
		"id": "Gu2017",
		"title": "iGraph",
		"year": 2017,
		"authors": "Yi Gu et al.",
		"reference": "Yi Gu, Chaoli Wang, Jun Ma, Robert J. Nemiroff, David L. Kao, and Denis Parra. <i>Visualization and recommendation of large image collections toward effective sensemaking</i>. Information Visualization, vol. 16, no. 1, pp. 21-47, 2017.",
		"url": "https://doi.org/10.1177/1473871616630778",
		"categories": ["text-summarization", "relation-analysis", "trend-analysis", "overview", "comparison", "roi", "navigation", "corpora", "time-series", "networks", "2d", "line-plot", "pixel-area", "node-link", "linear", "metric"]
	},

	{
		"id": "Indratmo2008",
		"title": "iBlogVis",
		"year": 2008,
		"authors": "Indratmo, Julita Vassileva, and Carl Gutwin",
		"reference": "Indratmo, Julita Vassileva, and Carl Gutwin. <i>Exploring blog archives with interactive visualization</i>. Proceedings of the Working Conference on Advanced Visual Interfaces (AVI), pp. 39-46, 2008.",
		"url": "https://doi.org/10.1145/1385569.1385578",
		"categories": ["text-summarization", "trend-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "2d", "social-media", "glyph", "text", "linear"]
	},

	{
		"id": "Kuksenok2012",
		"title": "Affect Annotations Timeline",
		"year": 2012,
		"authors": "Katie Kuksenok et al.",
		"reference": "Katie Kuksenok, Michael Brooks, John J. Robinson, Daniel Perry, Megan K. Torkildson, and Cecilia Aragon. <i>Automating Large-Scale Annotation for Analysis of Social Media Content</i>. Proceedings of the IEEE Workshop on Interactive Visual Text Analytics (TextVis), 2012.",
		"url": "http://vialab.science.uoit.ca/textvis2012/paper/Automating.pdf",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "2d", "social-media", "line-plot", "pixel-area", "linear"]
	},

	{
		"id": "Neviarouskaya2014",
		"title": "@AM",
		"year": 2014,
		"authors": "Alena Neviarouskaya et al.",
		"reference": "Alena Neviarouskaya, Masaki Aono, Helmut Prendinger, and Mitsuru Ishizuka. <i>Intelligent Interface for Textual Attitude Analysis</i>. ACM Transactions on Intelligent Systems and Technology, vol. 5, no. 3, article 48, 2014.",
		"url": "https://doi.org/10.1145/2535912",
		"categories": ["sentiment-analysis", "stance-analysis", "trend-analysis", "overview", "classification", "comparison", "document", "2d", "line-plot", "pixel-area", "text", "linear", "radial"]
	},

	{
		"id": "Sung2016",
		"title": "ToPIN",
		"year": 2016,
		"authors": "Ching-Ying Sung et al.",
		"reference": "Ching-Ying Sung, Xun-Yi Huang, Yicong Shen, Fu-Yin Cherng, Wen-Chieh Lin, and Hao-Chuan Wang. <i>ToPIN: A Visual Analysis Tool for Time-anchored Comments in Online Educational Videos</i>. CHI '16 Extended Abstracts on Human Factors in Computing Systems, pp. 2185-2191, 2016.",
		"url": "https://doi.org/10.1145/2851581.2892327",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "trend-analysis", "relation-analysis", "overview", "classification", "comparison", "navigation", "corpora", "time-series", "networks", "2d", "social-media", "line-plot", "node-link", "linear"]
	},

	{
		"id": "Greenberg1996",
		"title": "Fisheye Text Viewer",
		"year": 1996,
		"authors": "Saul Greenberg, Carl Gutwin, and Andy Cockburn",
		"reference": "Saul Greenberg, Carl Gutwin, and Andy Cockburn. <i>Awareness through fisheye views in relaxed-WYSIWIS groupware</i>. Proceedings of the Conference on Graphics Interface (GI), pp. 28-38, 1996.",
		"url": "http://dl.acm.org/citation.cfm?id=241032",
		"categories": ["overview", "navigation", "document", "2d", "text", "linear"]
	},

	{
		"id": "Roseman1996",
		"title": "Radar View Widget",
		"year": 1996,
		"authors": "Mark Roseman and Saul Greenberg",
		"reference": "Mark Roseman and Saul Greenberg. <i>Building real-time groupware with GroupKit, a groupware toolkit</i>. ACM Transactions on Computer-Human Interaction, vol. 3, no. 1, pp. 66-106, 1996.",
		"url": "https://doi.org/10.1145/226159.226162",
		"categories": ["overview", "navigation", "document", "2d", "line-plot", "text", "linear"]
	},

	{
		"id": "Zimmer2017",
		"title": "OnGraX",
		"year": 2017,
		"authors": "Björn Zimmer, Magnus Sahlgren, and Andreas Kerren",
		"reference": "Björn Zimmer, Magnus Sahlgren, and Andreas Kerren. <i>Visual Analysis of Relationships between Heterogeneous Networks and Texts: An Application on the IEEE VIS Publication Dataset</i>. Informatics, vol. 4, no. 2, article 11, 2017.",
		"url": "https://doi.org/10.3390/informatics4020011",
		"categories": ["text-summarization", "lexical-analysis", "relation-analysis", "roi", "classification", "comparison", "overview", "navigation", "corpora", "networks", "papers", "2d", "pixel-area", "node-link", "text", "linear", "metric"]
	},

	{
		"id": "Kaye2012",
		"title": "Nokia Internet Pulse",
		"year": 2012,
		"authors": "Joseph 'Jofish' Kaye et al.",
		"reference": "Joseph 'Jofish' Kaye, Anita Lillie, Deepak Jagdish, James Walkup, Rita Parada, and Koichi Mori. <i>Nokia Internet Pulse: A Long Term Deployment and Iteration of a Twitter Visualization</i>. CHI '12 Extended Abstracts on Human Factors in Computing Systems, pp. 829-844, 2012.",
		"url": "https://doi.org/10.1145/2212776.2212856",
		"categories": ["text-summarization", "sentiment-analysis", "event-analysis", "lexical-analysis", "classification", "comparison", "overview", "monitoring", "corpora", "time-series", "social-media", "2d", "text", "linear"]
	},

	{
		"id": "Huang2017",
		"title": "Active Learning Annotation Interface",
		"year": 2017,
		"authors": "Lulu Huang et al.",
		"reference": "Lulu Huang, Stan Matwin, Eder J. de Carvalho, and Rosane Minghim. <i>Active Learning with Visualization for Text Data</i>. Proceedings of the ACM Workshop on Exploratory Search and Interactive Data Analytics (ESIDA), pp. 69-74, 2017.",
		"url": "https://doi.org/10.1145/3038462.3038469",
		"categories": ["text-summarization", "sentiment-analysis", "lexical-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "networks", "2d", "pixel-area", "node-link", "clouds", "text", "radial", "metric"]
	},

	{
		"id": "Jentner2017",
		"title": "Feature Alignment Visualization",
		"year": 2017,
		"authors": "Wolfgang Jentner et al.",
		"reference": "Wolfgang Jentner, Mennatallah El-Assady, Bela Gipp, and Daniel Keim. <i>Feature Alignment for the Analysis of Verbatim Text Transcripts</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), 2017.",
		"url": "https://doi.org/10.2312/eurova.20171113",
		"categories": ["text-summarization", "discourse-analysis", "stance-analysis", "event-analysis", "trend-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "time-series", "networks", "communication", "2d", "node-link", "glyph", "text", "linear"]
	},

	{
		"id": "Hundt2017",
		"title": "Geolocated Echo Chambers Visualization",
		"year": 2017,
		"authors": "Michael Hundt et al.",
		"reference": "Michael Hundt, Bruno Schneider, Mennatallah El-Assady, Daniel Keim, and Alexandra Diehl. <i>Visual Analysis of Geolocated Echo Chambers in Social Media</i>. Poster Abstracts of the Eurographics Conference on Visualization (EuroVis), 2017.",
		"url": "https://doi.org/10.2312/eurp.20171185",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "uncertainty", "corpora", "geospatial", "time-series", "networks", "social-media", "2d", "pixel-area", "node-link", "maps", "glyph", "linear", "metric"]
	},

	{
		"id": "El-Assady2017",
		"title": "NEREx",
		"year": 2017,
		"authors": "Mennatallah El-Assady et al.",
		"reference": "Mennatallah El-Assady, Rita Sevastjanova, Bela Gipp, Daniel Keim, and Christopher Collins. <i>NEREx: Named-Entity Relationship Exploration in Multi-Party Conversations</i>. Computer Graphics Forum, vol. 36, no. 3, pp. 213-225, 2017.",
		"url": "https://doi.org/10.1111/cgf.13181",
		"categories": ["text-summarization", "discourse-analysis", "sentiment-analysis", "stance-analysis", "trend-analysis", "relation-analysis", "classification", "comparison", "overview", "monitoring", "navigation", "corpora", "time-series", "networks", "communication", "2d", "pixel-area", "node-link", "glyph", "text", "linear", "metric"]
	},

	{
		"id": "Humayoun2017",
		"title": "TExVis",
		"year": 2017,
		"authors": "Shah Rukh Humayoun et al.",
		"reference": "Shah Rukh Humayoun, Saman Ardalan, Ragaad AlTarawneh, and Achim Ebert. <i>TExVis: An Interactive Visual Tool to Explore Twitter Data</i>. Short Papers of the Eurographics Conference on Visualization (EuroVis), 2017.",
		"url": "https://doi.org/10.2312/eurovisshort.20171149",
		"categories": ["text-summarization", "sentiment-analysis", "lexical-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "uncertainty", "corpora", "time-series", "networks", "social-media", "2d", "pixel-area", "node-link", "radial"]
	},

	{
		"id": "Rios2017",
		"title": "TSViz",
		"year": 2017,
		"authors": "Ricardo A. Rios et al.",
		"reference": "Ricardo A. Rios, Paulo A. Pagliosa, Renato P. Ishii, and Rodrigo F. de Mello. <i>TSViz: A Data Stream Architecture to Online Collect, Analyze, and Visualize Tweets</i>. Proceedings of the Symposium on Applied Computing (SAC), pp. 1031-1036, 2017.",
		"url": "https://doi.org/10.1145/3019612.3019811",
		"categories": ["sentiment-analysis", "trend-analysis", "classification", "comparison", "overview", "monitoring", "streams", "time-series", "social-media", "2d", "line-plot", "linear"]
	},

	{
		"id": "Godwin2017",
		"title": "TypoTweet Maps",
		"year": 2017,
		"authors": "Alex Godwin, Yongxin Wang, and John T. Stasko",
		"reference": "Alex Godwin, Yongxin Wang, and John T. Stasko. <i>TypoTweet Maps: Characterizing Urban Areas through Typographic Social Media Visualization</i>. Short Papers of the Eurographics Conference on Visualization (EuroVis), 2017.",
		"url": "https://doi.org/10.2312/eurovisshort.20171128",
		"categories": ["text-summarization", "lexical-analysis", "classification", "comparison", "overview", "navigation", "corpora", "geospatial", "social-media", "2d", "maps", "text", "metric"]
	},

	{
		"id": "Nualart2017",
		"title": "Diggersdiaries",
		"year": 2017,
		"authors": "Jaume Nualart Vilaplana and Mario Pérez-Montoro",
		"reference": "Jaume Nualart Vilaplana and Mario Pérez-Montoro. <i>Diggersdiaries: Using Text Analysis to Support Exploration and Reading in a Large Document Collection</i>. Poster Abstracts of the Eurographics Conference on Visualization (EuroVis), 2017.",
		"url": "https://doi.org/10.2312/eurp.20171156",
		"categories": ["text-summarization", "classification", "comparison", "overview", "navigation", "document", "corpora", "time-series", "editorial-media", "literature", "2d", "pixel-area", "text", "linear"]
	},

	{
		"id": "Kucher2017",
		"title": "ALVA",
		"year": 2017,
		"authors": "Kostiantyn Kucher et al.",
		"reference": "Kostiantyn Kucher, Carita Paradis, Magnus Sahlgren, and Andreas Kerren. <i>Active Learning and Visual Analytics for Stance Classification with ALVA</i>. ACM Transactions on Interactive Intelligent Systems, vol. 7, no. 3, article 14, 2017.",
		"url": "https://doi.org/10.1145/3132169",
		"categories": ["stance-analysis", "trend-analysis", "lexical-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "line-plot", "pixel-area", "node-link", "clouds", "glyph", "text", "linear", "metric"]
	},

	{
		"id": "Martins2017",
		"title": "StanceXplore",
		"year": 2017,
		"authors": "Rafael M. Martins et al.",
		"reference": "Rafael M. Martins, Vasiliki Simaki, Kostiantyn Kucher, Carita Paradis and Andreas Kerren. <i>StanceXplore: Visualization for the Interactive Exploration of Stance in Social Media</i>. Proceedings of the Workshop on Visualization for the Digital Humanities (VIS4DH), 2017.",
		"url": "http://urn.kb.se/resolve?urn=urn%3Anbn%3Ase%3Alnu%3Adiva-67320",
		"categories": ["text-summarization", "stance-analysis", "trend-analysis", "classification", "comparison", "overview", "navigation", "uncertainty", "corpora", "geospatial", "time-series", "social-media", "2d", "line-plot", "pixel-area", "maps", "glyph", "text", "linear", "metric"]
	},

	{
		"id": "Sheidin2017",
		"title": "Time-Ray Maps",
		"year": 2017,
		"authors": "Julia Sheidin et al.",
		"reference": "Julia Sheidin, Joel Lanir, Peter Bak, and Tsvi Kuflik. <i>Time-Ray Maps: Visualization of Spatial and Temporal Evolution of News Stories</i>. Short Papers of the Eurographics Conference on Visualization (EuroVis), 2017.",
		"url": "https://doi.org/10.2312/eurovisshort.20171138",
		"categories": ["event-analysis", "trend-analysis", "relation-analysis", "comparison", "overview", "navigation", "corpora", "geospatial", "time-series", "editorial-media", "2d", "pixel-area", "maps", "radial", "metric"]
	},

	{
		"id": "Stoffel2017",
		"title": "AmbiguityMatrix",
		"year": 2017,
		"authors": "Florian Stoffel et al.",
		"reference": "Florian Stoffel, Wolfgang Jentner, Michael Behrisch, Johannes Fuchs, and Daniel Keim. <i>Interactive Ambiguity Resolution of Named Entities in Fictional Literature</i>. Computer Graphics Forum, vol. 36, no. 3, pp. 189-200, 2017.",
		"url": "https://doi.org/10.1111/cgf.13179",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "document", "literature", "2d", "pixel-area", "linear"]
	},

	{
		"id": "Xu2017",
		"title": "Controversy Visualization",
		"year": 2017,
		"authors": "Jin Xu et al.",
		"reference": "Jin Xu, Yubo Tao, Hai Lin, Rongjie Zhu, and Yuyu Yan. <i>Exploring controversy via sentiment divergences of aspects in reviews</i>. Proceedings of the IEEE Pacific Visualization Symposium (PacificVis), pp. 240-249, 2017.",
		"url": "https://doi.org/10.1109/PACIFICVIS.2017.8031600",
		"categories": ["text-summarization", "sentiment-analysis", "trend-analysis", "classification", "comparison", "overview", "navigation", "uncertainty", "corpora", "time-series", "networks", "reviews", "2d", "line-plot", "pixel-area", "clouds", "glyph", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Hohman2017",
		"title": "Viz of Ice and Fire",
		"year": 2017,
		"authors": "Fred Hohman et al.",
		"reference": "Fred Hohman, Sandeep Soni, Ian Stewart, and John Stasko. <i>A Viz of Ice and Fire: Exploring Entertainment Video Using Color and Dialogue</i>. Proceedings of the Workshop on Visualization for the Digital Humanities (VIS4DH), 2017.",
		"url": "http://vis4dh.dbvis.de/papers/2017/A%20Viz%20of%20Ice%20and%20Fire%20Exploring%20Entertainment%20Video%20Using%20Color%20and%20Dialogue.pdf",
		"categories": ["text-summarization", "sentiment-analysis", "event-analysis", "trend-analysis", "lexical-analysis", "classification", "comparison", "overview", "navigation", "corpora", "time-series", "editorial-media", "literature", "2d", "pixel-area", "clouds", "glyph", "linear"]
	},

	{
		"id": "Bader2017",
		"title": "Plutchik Radar",
		"year": 2017,
		"authors": "Nadeem Bader, Osnat Mokryn, and Joel Lanir",
		"reference": "Nadeem Bader, Osnat Mokryn, and Joel Lanir. <i>Exploring Emotions in Online Movie Reviews for Online Browsing</i>. Proceedings of the International Conference on Intelligent User Interfaces Companion (IUI Companion), pp. 35-38, 2017.",
		"url": "https://doi.org/10.1145/3030024.3040982",
		"categories": ["sentiment-analysis", "relation-analysis", "classification", "comparison", "overview", "document", "corpora", "reviews", "2d", "line-plot", "glyph", "radial"]
	},

	{
		"id": "Gao2017",
		"title": "Controversial Topics Visualization",
		"year": 2017,
		"authors": "Mingkun Gao, Hyo Jin Do, and Wai-Tat Fu",
		"reference": "Mingkun Gao, Hyo Jin Do, and Wai-Tat Fu. <i>An Intelligent Interface for Organizing Online Opinions on Controversial Topics</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 119-123, 2017.",
		"url": "https://doi.org/10.1145/3025171.3025230",
		"categories": ["sentiment-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "social-media", "2d", "pixel-area", "glyph", "text", "linear"]
	},

	{
		"id": "Cho2017",
		"title": "CrystalBall",
		"year": 2017,
		"authors": "Isaac Cho et al.",
		"reference": "Isaac Cho, Ryan Wesslen, Svitlana Volkova, Bill Ribarsky, and Wenwen Dou. <i>CrystalBall: A Visual Analytic System for Future Event Discovery and Analysis from Social Media Data</i>. Proceedings of the IEEE Conference on Visual Analytics Science and Technology (VAST), 2017.",
		"url": "https://doi.org/10.1109/VAST.2017.8585658",
		"categories": ["text-summarization", "sentiment-analysis", "event-analysis", "relation-analysis", "classification", "comparison", "overview", "monitoring", "navigation", "uncertainty", "corpora", "streams", "geospatial", "time-series", "networks", "social-media", "2d", "pixel-area", "node-link", "clouds", "maps", "glyph", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Lee2009",
		"title": "TRIB",
		"year": 2009,
		"authors": "Yun-Jung Lee et al.",
		"reference": "Yun-Jung Lee, Min-Jung Bae, Gyun Woo, and Hwan-Gue Cho. <i>A Personalized Visualizing and Filtering System for a Large Set of Responding Messages on Internet Discussion Forums</i>. Proceedings of the IEEE International Conference on Computer and Information Technology (CIT), pp. 160-165, 2009.",
		"url": "https://doi.org/10.1109/CIT.2009.131",
		"categories": ["text-summarization", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "clouds", "maps", "radial", "metric"]
	},

	{
		"id": "PerezMessina2018",
		"title": "Organic Visualization of Document Evolution",
		"year": 2018,
		"authors": "Ignacio Perez-Messina, Claudio Gutierrez, and Eduardo Graells-Garrido",
		"reference": "Ignacio Perez-Messina, Claudio Gutierrez, and Eduardo Graells-Garrido. <i>Organic Visualization of Document Evolution</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 497-501, 2018.",
		"url": "https://doi.org/10.1145/3172944.3173004",
		"categories": ["event-analysis", "translation-analysis", "comparison", "overview", "navigation", "document", "time-series", "networks", "2d", "node-link", "glyph", "text", "metric"]
	},

	{
		"id": "Han2016",
		"title": "Visual Approach for Interactive Co-Training",
		"year": 2016,
		"authors": "Qi Han et al.",
		"reference": "Qi Han, Weimeng Zhu, Florian Heimerl, Steffen Koch, and Thomas Ertl. <i>A Visual Approach for Interactive Co-Training</i>. Proceedings of the KDD Workshop on Interactive Data Exploration and Analytics (IDEA), pp. 46-52, 2016.",
		"url": "http://poloclub.gatech.edu/idea2016/papers/p46-han.pdf",
		"categories": ["text-summarization", "trend-analysis", "relation-analysis", "roi", "classification", "comparison", "overview", "navigation", "uncertainty", "corpora", "2d", "pixel-area", "node-link", "glyph", "text", "linear"]
	},

	{
		"id": "Kucher2018",
		"title": "DoSVis",
		"year": 2018,
		"authors": "Kostiantyn Kucher, Carita Paradis, and Andreas Kerren",
		"reference": "Kostiantyn Kucher, Carita Paradis, and Andreas Kerren. <i>DoSVis: Document Stance Visualization</i>. Proceedings of the International Conference on Information Visualization Theory and Applications (IVAPP), pp. 168-175, 2018.",
		"url": "https://doi.org/10.5220/0006539101680175",
		"categories": ["text-summarization", "stance-analysis", "classification", "comparison", "overview", "navigation", "uncertainty", "document", "reviews", "literature", "editorial-media", "2d", "clouds", "glyph", "text", "linear"]
	},

	{
		"id": "Skeppstedt2018",
		"title": "Topics2Themes",
		"year": 2018,
		"authors": "Maria Skeppstedt et al.",
		"reference": "Maria Skeppstedt, Kostiantyn Kucher, Manfred Stede, and Andreas Kerren. <i>Topics2Themes: Computer-Assisted Argument Extraction by Visual Analysis of Important Topics</i>. Proceedings of the LREC Workshop on Visualization as Added Value in the Development, Use and Evaluation of Language Resources (VisLR), 2018.",
		"url": "http://lrec-conf.org/workshops/lrec2018/W16/summaries/2_W16.html",
		"categories": ["text-summarization", "stance-analysis", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "networks", "social-media", "2d", "node-link", "glyph", "text", "linear"]
	},

	{
		"id": "Kucher2018_2",
		"title": "VINCI Topics Visualization",
		"year": 2018,
		"authors": "Kostiantyn Kucher, Rafael M. Martins, and Andreas Kerren",
		"reference": "Kostiantyn Kucher, Rafael M. Martins, and Andreas Kerren. <i>Analysis of VINCI 2009-2017 Proceedings</i>. Proceedings of the International Symposium on Visual Information Communication and Interaction (VINCI), pp. 97-101, 2018.",
		"url": "https://doi.org/10.1145/3231622.3231641",
		"categories": ["text-summarization", "relation-analysis", "classification", "comparison", "overview", "navigation", "corpora", "networks", "papers", "2d", "pixel-area", "clouds", "linear", "metric"]
	},

	{
		"id": "GomezZara2018",
		"title": "News Articles Role Detection",
		"year": 2018,
		"authors": "Diego Gomez-Zara, Miriam Boon, and Larry Birnbaum",
		"reference": "Diego Gomez-Zara, Miriam Boon, and Larry Birnbaum. <i>Who is the Hero, the Villain, and the Victim?: Detection of Roles in News Articles using Natural Language Techniques</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 311-315, 2018.",
		"url": "https://doi.org/10.1145/3172944.3172993",
		"categories": ["text-summarization", "sentiment-analysis", "classification", "comparison", "overview", "document", "editorial-media", "2d", "glyph", "text", "linear"]
	},

	{
		"id": "Harris2018",
		"title": "NewsTone",
		"year": 2018,
		"authors": "Christopher Harris",
		"reference": "Christopher Harris. <i>Searching for Diverse Perspectives in News Articles: Using an LSTM Network to Classify Sentiment</i>. Proceedings of the Workshop on Exploratory Search and Interactive Data Analytics (ESIDA), 2018.",
		"url": "http://ceur-ws.org/Vol-2068/esida3.pdf",
		"categories": ["text-summarization", "sentiment-analysis", "classification", "comparison", "overview", "document", "corpora", "editorial-media", "2d", "pixel-area", "glyph", "text", "linear"]
	},

	{
		"id": "Chamberlain2018",
		"title": "Scalable Visualization of Sentiment and Stance",
		"year": 2018,
		"authors": "Jon Chamberlain, Udo Kruschwitz, and Orland Hoeber",
		"reference": "Jon Chamberlain, Udo Kruschwitz, and Orland Hoeber. <i>Scalable Visualisation of Sentiment and Stance</i>. Proceedings of the International Conference on Language Resources and Evaluation (LREC), pp. 4181-4182, 2018.",
		"url": "http://lrec-conf.org/proceedings/lrec2018/summaries/760.html",
		"categories": ["sentiment-analysis", "stance-analysis", "classification", "comparison", "overview", "corpora", "social-media", "2d", "pixel-area", "glyph", "linear"]
	},

	{
		"id": "Wu2018",
		"title": "StreamExplorer",
		"year": 2018,
		"authors": "Yingcai Wu et al.",
		"reference": "Yingcai Wu, Zhutian Chen, Guodao Sun, Xiao Xie, Nan Cao, Shixia Liu, and Weiwei Cui. <i>StreamExplorer: A Multi-Stage System for Visually Exploring Events in Social Streams</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 10, pp. 2758-2772, 2018.",
		"url": "https://doi.org/10.1109/TVCG.2017.2764459",
		"categories": ["text-summarization", "sentiment-analysis", "event-analysis", "trend-analysis", "relation-analysis", "classification", "comparison", "overview", "monitoring", "navigation", "corpora", "streams", "geospatial", "time-series", "networks", "social-media", "2d", "line-plot", "pixel-area", "node-link", "clouds", "maps", "glyph", "linear", "radial", "metric"]
	},

	{
		"id": "Fu2018",
		"title": "VisForum",
		"year": 2018,
		"authors": "Siwei Fu et al.",
		"reference": "Siwei Fu, Yong Wang, Yi Yang, Qingqing Bi, Fangzhou Guo, and Huamin Qu. <i>VisForum: A Visual Analysis System for Exploring User Groups in Online Forums</i>. ACM Transactions on Interactive Intelligent Systems, vol. 8, no. 1, article 3, 2018.",
		"url": "https://doi.org/10.1145/3162075",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "line-plot", "pixel-area", "node-link", "glyph", "linear", "radial", "metric"]
	},

	{
		"id": "Topal2017",
		"title": "Emotion Map",
		"year": 2017,
		"authors": "Kamil Topal and Gultekin Ozsoyoglu",
		"reference": "Kamil Topal and Gultekin Ozsoyoglu. <i>Emotional Classification and Visualization of Movies Based on Their IMDb Reviews</i>. Information Discovery and Delivery, vol. 45, no. 3, pp. 149-158, 2017.",
		"url": "https://doi.org/10.1108/IDD-05-2017-0045",
		"categories": ["sentiment-analysis", "overview", "comparison", "classification", "corpora", "reviews", "2d", "pixel-area", "maps", "linear", "metric"]
	},

	{
		"id": "Kim2018",
		"title": "Story Explorer",
		"year": 2018,
		"authors": "Nam Wook Kim et al.",
		"reference": "Nam Wook Kim, Benjamin Bach, Hyejin Im, Sasha Schriber, Markus Gross, and Hanspeter Pfister. <i>Visualizing Nonlinear Narratives with Story Curves</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 1, pp. 595-604, 2018.",
		"url": "https://doi.org/10.1109/TVCG.2017.2744118",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "event-analysis", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "document", "time-series", "literature", "editorial-media", "2d", "line-plot", "pixel-area", "linear"]
	},

	{
		"id": "Valdiviezo2017",
		"title": "SCWorld",
		"year": 2017,
		"authors": "Omar Valdiviezo, J. Alfredo Sánchez, and Ofelia Cervantes",
		"reference": "Omar Valdiviezo, J. Alfredo Sánchez, and Ofelia Cervantes. <i>Visualizing Sentiment Change in Social Networks</i>. Proceedings of the Latin American Conference on Human-Computer Interaction (CLIHC), article 1, 2017.",
		"url": "https://doi.org/10.1145/3151470.3151475",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "classification", "comparison", "overview", "monitoring", "navigation", "streams", "time-series", "networks", "social-media", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "Meersbergen2017",
		"title": "Storyteller",
		"year": 2017,
		"authors": "Maarten van Meersbergen et al.",
		"reference": "Maarten van Meersbergen, Piek Vossen, Janneke van der Zwaan, Antske Fokkens, Willem van Hage, Inger Leemans, and Isa Maks. <i>Storyteller: Visual Analytics of Perspectives on Rich Text Interpretations</i>. Proceedings of the EMNLP Workshop: Natural Language Processing meets Journalism, pp. 37-45, 2017.",
		"url": "http://aclweb.org/anthology/W17-4207",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "event-analysis", "relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "literature", "editorial-media", "2d", "line-plot", "pixel-area", "node-link", "glyph", "text", "linear", "metric"]
	},

	{
		"id": "Jiranantanagorn2016",
		"title": "ClasSense Morale Graph",
		"year": 2016,
		"authors": "Peerumporn Jiranantanagorn and Haifeng Shen",
		"reference": "Peerumporn Jiranantanagorn and Haifeng Shen. <i>Sentiment Analysis and Visualisation in a Backchannel System</i>. Proceedings of the Australian Conference on Computer-Human Interaction (OzCHI), pp. 353-357, 2016.",
		"url": "https://doi.org/10.1145/3010915.3010992",
		"categories": ["sentiment-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "social-media", "communication", "2d", "pixel-area", "glyph", "linear"]
	},

	{
		"id": "Hoque2015",
		"title": "ConVisIT",
		"year": 2015,
		"authors": "Enamul Hoque and Giuseppe Carenini",
		"reference": "Enamul Hoque and Giuseppe Carenini. <i>ConVisIT: Interactive Topic Modeling for Exploring Asynchronous Online Conversations</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 169-180, 2015.",
		"url": "https://doi.org/10.1145/2678025.2701370",
		"categories": ["text-summarization", "discourse-analysis", "sentiment-analysis", "overview", "classification", "navigation", "comparison", "corpora", "networks", "social-media", "2d", "node-link", "text", "pixel-area", "metric", "radial"]
	},

	{
		"id": "Nguyen2013",
		"title": "Public Sentiment Score Visualization",
		"year": 2013,
		"authors": "Vu Dung Nguyen, Blesson Varghese, and Adam Barker",
		"reference": "Vu Dung Nguyen, Blesson Varghese, and Adam Barker. <i>The Royal Birth of 2013: Analysing and Visualising Public Sentiment in the UK Using Twitter</i>. Proceedings of the IEEE International Conference on Big Data, pp. 46-54, 2013.",
		"url": "https://doi.org/10.1109/BigData.2013.6691669",
		"categories": ["sentiment-analysis", "trend-analysis", "relation-analysis", "overview", "comparison", "classification", "corpora", "time-series", "geospatial", "social-media", "2d", "line-plot", "pixel-area", "maps", "linear", "metric"]
	},

	{
		"id": "Mitchell2013",
		"title": "Geography of Happiness",
		"year": 2013,
		"authors": "Lewis Mitchell et al.",
		"reference": "Lewis Mitchell, Morgan R. Frank, Kameron Decker Harris, Peter Sheridan Dodds, and Christopher M. Danforth. <i>The Geography of Happiness: Connecting Twitter Sentiment and Expression, Demographics, and Objective Characteristics of Place</i>. PLoS ONE, vol. 8, no. 5, article e64417, 2013.",
		"url": "https://doi.org/10.1371/journal.pone.0064417",
		"categories": ["sentiment-analysis", "relation-analysis", "lexical-analysis", "overview", "comparison", "classification", "corpora", "geospatial", "social-media", "2d", "pixel-area", "maps", "clouds", "glyph", "linear", "metric"]
	},

	{
		"id": "Claster2010",
		"title": "Tourism and Conflict Sentiment Visualization",
		"year": 2010,
		"authors": "William B. Claster, Malcolm Cooper, and Philip Sallis",
		"reference": "William B. Claster, Malcolm Cooper, and Philip Sallis. <i>Thailand – Tourism and Conflict: Modeling Sentiment from Twitter Tweets Using Naïve Bayes and Unsupervised Artificial Neural Nets</i>. Proceedings of the International Conference on Computational Intelligence, Modelling and Simulation (CIMSim), pp. 89-94, 2010.",
		"url": "https://doi.org/10.1109/CIMSiM.2010.98",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "social-media", "2d", "line-plot", "maps", "linear", "metric"]
	},

	{
		"id": "Reckziegel2018",
		"title": "Predominance Tag Maps",
		"year": 2018,
		"authors": "Martin Reckziegel et al.",
		"reference": "Martin Reckziegel, Muhammad Faisal Cheema, Gerik Scheuermann, and Stefan Jänicke. <i>Predominance Tag Maps</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 6, pp. 1893-1904, 2018.",
		"url": "https://doi.org/10.1109/TVCG.2018.2816208",
		"categories": ["text-summarization", "relation-analysis", "overview", "comparison", "classification", "geospatial", "2d", "maps", "clouds", "text", "metric"]
	},

	{
		"id": "Wang2018",
		"title": "E-Comp",
		"year": 2018,
		"authors": "Yong Wang et al.",
		"reference": "Yong Wang, Hammad Haleem, Conglei Shi, Yanhong Wu, Xun Zhao, Siwei Fu, and Huamin Qu. <i>Towards Easy Comparison of Local Businesses Using Online Reviews</i>. Computer Graphics Forum, vol. 37, no. 3, pp. 63-74, 2018.",
		"url": "https://doi.org/10.1111/cgf.13401",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "time-series", "networks", "reviews", "2d", "pixel-area", "node-link", "glyph", "maps", "clouds", "text", "linear", "radial", "metric"]
	},

	{
		"id": "Nazemi2015",
		"title": "SemaVis",
		"year": 2015,
		"authors": "Kawa Nazemi et al.",
		"reference": "Kawa Nazemi, Reimond Retz, Dirk Burkhardt, Arjan Kuijper, Jörn Kohlhammer, and Dieter W. Fellner. <i>Visual trend analysis with digital libraries</i>. Proceedings of the International Conference on Knowledge Technologies and Data-driven Business (i-KNOW), article 14, 2015.",
		"url": "https://doi.org/10.1145/2809563.2809569",
		"categories": ["text-summarization", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "time-series", "networks", "papers", "2d", "line-plot", "pixel-area", "node-link", "clouds", "maps", "text", "linear", "radial"]
	},

	{
		"id": "Silvia2016",
		"title": "Force Directed Storylines",
		"year": 2016,
		"authors": "Shejuti Silvia et al.",
		"reference": "Shejuti Silvia, Ronak Etemadpour, June Abbas, Sam Huskey, and Chris Weaver. <i>Visualizing Variation in Classical Text with Force Directed Storylines</i>. Proceedings of the Workshop on Visualization for the Digital Humanities (VIS4DH), 2016.",
		"url": "http://vis4dh.dbvis.de/papers/2016/Visualizing%20Variation%20in%20Classical%20Text%20with%20Force%20Directed%20Storylines.pdf",
		"categories": ["text-summarization", "discourse-analysis", "translation-analysis", "overview", "comparison", "classification", "corpora", "time-series", "networks", "literature", "2d", "line-plot", "node-link", "metric"]
	},

	{
		"id": "Kherwa2014",
		"title": "Sentimental Data Analysis",
		"year": 2014,
		"authors": "Pooja Kherwa et al.",
		"reference": "Pooja Kherwa, Arjit Sachdeva, Dhruv Mahajan, Nishtha Pande, and Prashast Kumar Singh. <i>An approach towards comprehensive sentimental data analysis and opinion mining</i>. Proceedings of the IEEE International Advance Computing Conference (IACC), pp. 606-612, 2014.",
		"url": "https://doi.org/10.1109/IAdCC.2014.6779394",
		"categories": ["text-summarization", "sentiment-analysis", "overview", "comparison", "classification", "corpora", "reviews", "2d", "pixel-area", "glyph", "linear", "radial"]
	},

	{
		"id": "Cuenca2018",
		"title": "MultiStream",
		"year": 2018,
		"authors": "Erick Cuenca et al.",
		"reference": "Erick Cuenca, Arnaud Sallaberry, Florence Y. Wang, and Pascal Poncelet. <i>MultiStream: A Multiresolution Streamgraph Approach to Explore Hierarchical Time Series</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 12, pp. 3160-3173, 2018.",
		"url": "https://doi.org/10.1109/TVCG.2018.2796591",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "2d", "line-plot", "node-link", "linear", "metric"]
	},

	{
		"id": "Wright2017",
		"title": "Argument Mapper",
		"year": 2017,
		"authors": "William Wright, David Sheffield, and Stephanie Santosa",
		"reference": "William Wright, David Sheffield, and Stephanie Santosa. <i>Argument Mapper: Countering Cognitive Biases in Analysis with Critical (Visual) Thinking</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 250-255, 2017.",
		"url": "https://doi.org/10.1109/iV.2017.69",
		"categories": ["relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "networks", "2d", "node-link", "text", "metric"]
	},

	{
		"id": "El-Assady2018",
		"title": "ThreadReconstructor",
		"year": 2018,
		"authors": "Mennatallah El-Assady et al.",
		"reference": "Mennatallah El-Assady, Rita Sevastjanova, Daniel Keim, and Christopher Collins. <i>ThreadReconstructor: Modeling Reply-Chains to Untangle Conversational Text through Visual Analytics</i>. Computer Graphics Forum, vol. 37, no. 3, pp. 351-365, 2018.",
		"url": "https://doi.org/10.1111/cgf.13425",
		"categories": ["text-summarization", "discourse-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "communication", "2d", "line-plot", "pixel-area", "node-link", "glyph", "text", "linear"]
	},

	{
		"id": "Lu2018",
		"title": "Topic Drivers in Media Events",
		"year": 2018,
		"authors": "Yafeng Lu et al.",
		"reference": "Yafeng Lu, Hong Wang, Steven Landis, and Ross Maciejewski. <i>A Visual Analytics Framework for Identifying Topic Drivers in Media Events</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 9, pp. 2501-2515, 2018.",
		"url": "https://doi.org/10.1109/TVCG.2017.2752166",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "geospatial", "time-series", "networks", "social-media", "editorial-media", "2d", "line-plot", "pixel-area", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "AbdulRahman2017",
		"title": "ViTA",
		"year": 2017,
		"authors": "Alfie Abdul-Rahman et al.",
		"reference": "Alfie Abdul-Rahman, Glenn Roe, Mark Olsen, Clovis Gladstone, Richard Whaling, Nicholas Cronk, Robert Morrissey, and Min Chen. <i>Constructive Visual Analytics for Text Similarity Detection</i>. Computer Graphics Forum, vol. 36, no. 1, pp. 237-248, 2017.",
		"url": "https://doi.org/10.1111/cgf.12798",
		"categories": ["translation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "literature", "2d", "node-link", "clouds", "linear"]
	},

	{
		"id": "Park2018",
		"title": "ConceptVector",
		"year": 2018,
		"authors": "Deokgun Park et al.",
		"reference": "Deokgun Park, Seungyeon Kim, Jurim Lee, Jaegul Choo, Nicholas Diakopoulos, and Niklas Elmqvist. <i>ConceptVector: Text Visual Analytics via Interactive Lexicon Building Using Word Embedding</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 1, pp. 361-370, 2018.",
		"url": "https://doi.org/10.1109/TVCG.2017.2744478",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "2d", "pixel-area", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Dattolo2018",
		"title": "VisualBib",
		"year": 2018,
		"authors": "Antonina Dattolo and Marco Corbatto",
		"reference": "Antonina Dattolo and Marco Corbatto. <i>VisualBib: Narrative Views for Customized Bibliographies</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 133-138, 2018.",
		"url": "https://doi.org/10.1109/iV.2018.00033",
		"categories": ["trend-analysis", "relation-analysis", "overview", "comparison", "navigation", "corpora", "time-series", "networks", "papers", "2d", "line-plot", "node-link", "linear"]
	},

	{
		"id": "Corbatto2018",
		"title": "AppInventory",
		"year": 2018,
		"authors": "Marco Corbatto and Antonina Dattolo",
		"reference": "Marco Corbatto and Antonina Dattolo. <i>AppInventory: A Visual Catalogue of Web 2.0 and Mobile Applications for Supporting Teaching and Learning Activities</i>. Proceedings of the International Conference on Information Visualisation (IV), pp. 530-535, 2018.",
		"url": "https://doi.org/10.1109/iV.2018.00098",
		"categories": ["relation-analysis", "overview", "comparison", "classification", "navigation", "corpora", "networks", "reviews", "2d", "pixel-area", "node-link", "text", "metric"]
	},

	{
		"id": "Nguyen2018",
		"title": "FinanViz",
		"year": 2018,
		"authors": "Ngan V.T. Nguyen et al.",
		"reference": "Ngan V.T. Nguyen, Vinh T. Nguyen, Vung Pham, and Tommy Dang. <i>FinanViz: Visualizing Emerging Topics in Financial News</i>. Proceedings of the IEEE International Conference on Big Data, pp. 4698-4704, 2018.",
		"url": "https://doi.org/10.1109/BigData.2018.8622097",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "line-plot", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Dang2018",
		"title": "ComModeler",
		"year": 2018,
		"authors": "Tommy Dang and Vinh T. Nguyen",
		"reference": "Tommy Dang and Vinh T. Nguyen. <i>ComModeler: Topic Modeling Using Community Detection</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), pp. 1-5, 2018.",
		"url": "https://doi.org/10.2312/eurova.20181104 ",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "editorial-media", "papers", "2d", "node-link", "clouds", "text", "linear", "metric"]
	},

	{
		"id": "Li2018",
		"title": "Topic Popularity Exploration",
		"year": 2018,
		"authors": "Jie Li et al.",
		"reference": "Jie Li, Siming Chen, Gennady Andrienko, and Natalia Andrienko. <i>Visual Exploration of Spatial and Temporal Variations of Tweet Topic Popularity</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), pp. 7-11, 2018.",
		"url": "https://doi.org/10.2312/eurova.20181105",
		"categories": ["text-summarization", "event-analysis", "relation-analysis", "trend-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "line-plot", "pixel-area", "node-link", "clouds", "maps", "text", "linear", "metric"]
	},

	{
		"id": "Mueller2017",
		"title": "new/s/leak",
		"year": 2017,
		"authors": "Martin Müller et al.",
		"reference": "Martin Müller, Kathrin Ballweg, Tatiana von Landesberger, Seid Yimam, Uli Fahrer, Chris Biemann, Marcel Rosenbach, Michaela Regneri, and Heiner Ulrich. <i>Guidance for Multi-Type Entity Graphs from Text Collections</i>. Proceedings of the EuroVis Workshop on Visual Analytics (EuroVA), pp. 1-5, 2017.",
		"url": "https://doi.org/10.2312/eurova.20171111",
		"categories": ["text-summarization", "relation-analysis", "roi", "overview", "comparison", "navigation", "corpora", "networks", "editorial-media", "communication", "2d", "pixel-area", "node-link", "linear", "radial", "metric"]
	},

	{
		"id": "Ji2019",
		"title": "Visual Exploration of Neural Document Embedding",
		"year": 2019,
		"authors": "Xiaonan Ji et al.",
		"reference": "Xiaonan Ji, Han-Wei Shen, Alan Ritter, Raghu Machiraju, and Po-Yin Yen. <i>Visual Exploration of Neural Document Embedding in Information Retrieval: Semantics and Feature Selection</i>. IEEE Transactions on Visualization and Computer Graphics, vol. 25, no. 6, pp. 2181-2192, 2019.",
		"url": "https://doi.org/10.1109/TVCG.2019.2903946",
		"categories": ["text-summarization", "relation-analysis", "roi", "overview", "comparison", "classification", "navigation", "corpora", "2d", "line-plot", "pixel-area", "node-link", "clouds", "linear", "metric"]
	},

	{
		"id": "Kulahcioglu2019",
		"title": "Affective Word Clouds",
		"year": 2019,
		"authors": "Tugba Kulahcioglu and Gerard de Melo",
		"reference": "Tugba Kulahcioglu and Gerard de Melo. <i>Paralinguistic Recommendations for Affective Word Clouds</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 132-143, 2019.",
		"url": "https://doi.org/10.1145/3301275.3302327",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "overview", "classification", "document", "corpora", "2d", "clouds", "text", "metric"]
	},

	{
		"id": "Watson2019",
		"title": "StoryPrint",
		"year": 2019,
		"authors": "Katie Watson et al.",
		"reference": "Katie Watson, Samuel S. Sohn, Sasha Schriber, Markus Gross, Carlos Manuel Muniz, and Mubbasir Kapadia. <i>StoryPrint: An Interactive Visualization of Stories</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 303-311, 2019.",
		"url": "https://doi.org/10.1145/3301275.3302302",
		"categories": ["text-summarization", "sentiment-analysis", "discourse-analysis", "event-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "document", "corpora", "time-series", "literature", "editorial-media", "2d", "pixel-area", "linear", "radial"]
	},

	{
		"id": "Karduni2019",
		"title": "Verifi2",
		"year": 2019,
		"authors": "Alireza Karduni et al.",
		"reference": "Alireza Karduni, Isaac Cho, Ryan Wesslen, Sashank Santhanam, Svitlana Volkova, Dustin L. Arendt, Samira Shaikh, and Wenwen Dou. <i>Vulnerable to Misinformation?: Verifi!</i>. Proceedings of the International Conference on Intelligent User Interfaces (IUI), pp. 312-323, 2019.",
		"url": "https://doi.org/10.1145/3301275.3302320",
		"categories": ["text-summarization", "sentiment-analysis", "relation-analysis", "trend-analysis", "overview", "comparison", "classification", "navigation", "corpora", "time-series", "networks", "social-media", "2d", "pixel-area", "node-link", "clouds", "glyph", "text", "linear", "radial", "metric"]
	}

]

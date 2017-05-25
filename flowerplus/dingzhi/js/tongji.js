function ga_buy () {
    ga('send', {
    hitType:'event',          // 事件 区别于 social 等
    eventCategory:'订购流程', // 事件分类
    eventAction:'立即购买',      // 事件动作
    eventLabel:'详情页购买'    // 事件标签
  });
}

function ga_submit () {
    ga('send', {
    hitType:'event',          // 事件 区别于 social 等
    eventCategory:'订购流程', // 事件分类
    eventAction:'确认下单',      // 事件动作
    eventLabel:'订单填写页'    // 事件标签
  });
}

function ga_cancle () {
    ga('send', {
    hitType: 'event',          // 事件 区别于 social 等
    eventCategory: '订购流程', // 事件分类
    eventAction: '取消订单',      // 事件动作
    eventLabel: '订单确认页'    // 事件标签
  });
}

function ga_pay (id, product_name, payment) {
  ga('send', {
    hitType:'event',          // 事件 区别于 social 等
    eventCategory:'订购流程', // 事件分类
    eventAction:'去支付',      // 事件动作
    eventLabel:'订单确认页'    // 事件标签
  });

  ga('require','ecommerce');
  ga('ecommerce:addTransaction', {
    'id':id,                     // 1234 为订单ID
    'affiliation':product_name,   // Acme Clothing 为单品名
    'revenue':payment,               // '11.99 为订单价格
  });
  ga('ecommerce:send');
}

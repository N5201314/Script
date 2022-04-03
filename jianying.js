body = $response.body.replace(/"is_vip":\d+/g, '"is_vip":1').replace(/"vip_type":\d+/g, '"vip_type":1').replace(/"vip_expire_time":\d+/g, '"vip_expire_time":1997654321').replace(/"vip":\d+/g, '"vip":1').replace(/"balance":\d+/g, '"balance":0').replace(/"success":\d+/g, '"success":1')
$done({body});
